// @ts-nocheck
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

const API_BASE_URL = "http://localhost:8080";

export const load = async ({ cookies, fetch }: Parameters<LayoutServerLoad>[0]) => {
    console.log('LayoutServerLoad')

    const accessToken = cookies.get('accessToken')

    console.log(accessToken)

    if (!accessToken) {
        console.log('1')
        // throw redirect(307, '/login')
    }

    try {
        const response = await fetch(`${API_BASE_URL}/auth`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })

        console.log(response)

        if (response.ok) {
            const user = await response.json()

            return { user }
        } else {
            // cookies.delete('accessToken', { path: '/' })
            // throw redirect(307, '/login')
        }
    } catch (err) {
        console.error('Authentication check failed', err)
        cookies.delete('accessToken', { path: '/' })
        // throw redirect(307, '/login')
    }
}