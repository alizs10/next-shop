import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../database/Models/User";
import { verifyPassword } from "../../../helpers/helpers";
import { closeConnection, connectDatabase } from "../../../util/database-util";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                // connect to database
                await connectDatabase(process.env.DB_NAME)


                let user = await User.findOne({ email: credentials.email })

                if (!user) {
                    closeConnection()
                    throw new Error("User Not Found!")
                }

                let isPasswordVerified = await verifyPassword(credentials.password, user.password)
                if (!isPasswordVerified) {
                    closeConnection()
                    throw new Error("Password is wrong!")
                }

                closeConnection()
                return { email: user.email, is_admin: user.is_admin }
            }
        })
    ]

}

export default NextAuth(authOptions)