import { NextResponse } from "next/server";

export const middleware = (request) => {
  return NextResponse.redirect(new URL("/signIn", request.url));
};

export const config = {
  matcher: "/about",
};
