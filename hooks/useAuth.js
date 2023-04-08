import { getSession } from 'next-auth/react';
import User from '../database/Models/User';
import { jsonParser } from '../helpers/helpers';

async function useAuth(req) {

    let session = await getSession({ req })

    if (!session) {
        
        return false
    }

    let user = await User.findOne({ email: session.user.email })
    if (!user) {
        return false;
    }

    return jsonParser(user);
}

export default useAuth;