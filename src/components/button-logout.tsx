'use client'

import { Button } from "@/components/ui/button";
import authApiRequest from "@/apiRequest/auth";
import { useRouter } from "next/navigation";
import { handleErrorApi } from "@/lib/utils";

export default function ButtonLogout() {
    const router = useRouter()
    const handleLogout = async () => {
        try {
            await authApiRequest.logoutFromNextClientToNextServer()
            router.push('/login')
        } catch (error) {
            handleErrorApi(
                {
                    error
                }
            )
        }
    }

    return (
        <Button size={'sm'} onClick={handleLogout}>
            Logout
        </Button>
    )
}
