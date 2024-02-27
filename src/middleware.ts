import { match } from "assert";
import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";


export default function middleware(req: NextRequest) {
   if(req.nextUrl.pathname === '/') {
        try {
            analytics.track('pageview', {
                page: '/',
                country: req.geo?.country,
                city: req.geo?.city,
            })
        } 
        catch(error) {
            console.error('error')
        }
   }

   return NextResponse.next();
}


export const matcher = {
    matcher: ['/']
}