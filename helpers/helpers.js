import { compare, hash } from "bcryptjs"

export const hashPassword = async (password) => {
    return await hash(password, 12)
}

export const verifyPassword = async (password, hashedPassword) => {
    return await compare(password, hashedPassword)
}

export const jsonParser = data => {
    return JSON.parse(JSON.stringify(data))
}

export const generateRandomId = () => {

    return Math.floor(Math.random() * 1000000)

}