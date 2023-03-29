import { check } from "../../lib/redis-bucket/bucket";

async function handler(req, res) {

    const { allowed, remaining } = await check("abcd")


    return res.status(200).json({ allowed, remaining })
}

export default handler;