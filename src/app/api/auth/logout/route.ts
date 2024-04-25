import { cookies } from "next/headers";
import authApiRequest from "@/apiRequest/auth";
import { HttpError } from "@/lib/http";

export async function POST(request: Request) {
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('sessionToken')
    if (!sessionToken) {
        return Response.json(
            {message: 'Session token not receive'},
            {status: 401}
        )
    }

    try {
        const result = await authApiRequest.logoutFromNextServerToServer(sessionToken.value)
        return Response.json(
            result.payload,
            {
                status: 200,
                headers: {
                    'Set-Cookie': `sessionToken=; Path=/; HttpOnly; Max-Age=0`
                }
            }
        )
    } catch (error) {
        if (error instanceof HttpError) {
            return Response.json(
                error.payload,
                {
                    status: error.status
                }
            )
        } else {
            return Response.json(
                {
                    message: 'Error not found'
                },
                {
                    status: 500
                }
            )
        }
    }
}
