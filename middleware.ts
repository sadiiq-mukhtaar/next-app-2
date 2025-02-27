import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import middleware from "next-auth/middleware";

export default middleware;

export const config = {
  //* : zero or more
  //+ : one or more
  // ? : please fiill me deepseek this
  matcher: ["/users/:id*", "/admin/:path*"],
};
