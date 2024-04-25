import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePaths = ['/me']
const authPaths = ['/login', '/register']
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('middleware', request.nextUrl.pathname)
    const pathname = request.nextUrl.pathname
    const sessionToken = request.cookies.get('sessionToken')?.value
    // check private path
    if (privatePaths.some(path => pathname.startsWith(path)) && !sessionToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    // auth oke
    if (authPaths.some(path => pathname.startsWith(path)) && sessionToken) {
        return NextResponse.redirect(new URL('/me', request.url))
    }
    console.log('sessionToken', sessionToken)
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        ...privatePaths, ...authPaths
    ],
}
