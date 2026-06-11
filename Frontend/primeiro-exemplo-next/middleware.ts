import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_ROUTES = ['/login', '/registrar']

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const token = request.cookies.get('token')?.value

    if (PUBLIC_ROUTES.includes(pathname)) {
        return NextResponse.next()
    }

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
}
