import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if accessing protected route
  if (request.nextUrl.pathname === "/protected") {
    const validApiKey = request.cookies.get("validApiKey");

    if (!validApiKey) {
      return NextResponse.redirect(new URL("/playground", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/protected",
};
