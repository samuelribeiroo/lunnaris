import { NextResponse } from "next/server";
import {clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const setHomeRoute = createRouteMatcher(['/'])

export default clerkMiddleware((auth, request) => {
  const {userId} = auth()

  if(userId && setHomeRoute(request)) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}