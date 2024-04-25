'use client'

import { useEffect } from "react";
import accountApiRequest from "@/apiRequest/account";
import { clientSessionToken } from "@/lib/http";
import { handleErrorApi } from "@/lib/utils";

export default function Profile() {
    console.log('session token', clientSessionToken)
    useEffect(() => {
        const fetchRequest = async () => {
            try {
                await accountApiRequest.meClient()
            } catch (error) {
                handleErrorApi({
                    error
                })
            }
        }
        fetchRequest()
    }, [clientSessionToken])
    return (
        <div>
            Profile
        </div>
    )
}
