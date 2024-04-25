import { cookies } from "next/headers";
import Profile from "@/app/me/profile";
import accountApiRequest from "@/apiRequest/account";

export default async function MePage() {
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('sessionToken')
    // console.log('sessionToken', sessionToken)
    const result = await accountApiRequest.me(sessionToken?.value ?? '')
    // console.log('result', result)
    return (
        <div>
            <div>
                Hello {result.payload.data?.name}
            </div>
            <div>
                <Profile/>
            </div>
        </div>
    )
}
