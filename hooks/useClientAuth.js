import { getSession } from 'next-auth/react';

async function useClientAuth(req) {

    let session = await getSession({ req })

    if (!session) {
        return false
    }

    return session;
}

export default useClientAuth;