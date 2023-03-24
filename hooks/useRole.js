import { getSession } from 'next-auth/react';
import { closeConnection, connectDatabase } from '../util/database-util';
import User from '../database/Models/User';
import { jsonParser } from '../helpers/helpers';

async function useRole(req, roles, props = {}) {

    await connectDatabase(process.env.DB_NAME)
    let session = await getSession({ req })

    if (!session) {
        closeConnection()
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    let user = await User.findOne({ email: session.user.email })
    closeConnection()

    if (!user) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    if (!roles.includes(user.role)) {
        return {
            redirect: {
                destination: "/403",
                permanent: false
            }
        }
    }


    return {
        props: {
            ...props,
            user: jsonParser(user)
        }
    }
}

export default useRole;