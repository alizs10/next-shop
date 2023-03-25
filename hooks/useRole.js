import { getSession } from 'next-auth/react';
import { closeConnection, connectDatabase } from '../util/database-util';
import User from '../database/Models/User';
import { jsonParser } from '../helpers/helpers';

async function useRole(req, roles, cb = null) {

    let props = {};

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

    if (!user) {
        closeConnection()
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    if (!roles.includes(user.role)) {
        closeConnection()
        return {
            redirect: {
                destination: "/403",
                permanent: false
            }
        }
    }

    props.user = jsonParser(user);
    if(cb)
    {
        await cb(props,user)
    }
    closeConnection()
    return {
        props
    }
}

export default useRole;