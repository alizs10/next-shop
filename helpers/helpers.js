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

export const formatDate = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}
export const getInputDateFormat = (d) => {
    let date = new Date(d)
    let year = date.getFullYear()
    let month = (10 - date.getMonth() + 1) > 0 ? `0${date.getMonth() + 1}` : date.getMonth()
    let day = 10 - date.getDate() > 0 ? `0${date.getDate()}` : date.getDate()

    return `${year}-${month}-${day}`;
}