import { NextResponse } from "next/server";

export function Starter(middleware) {
  return async (request, event) => {
    const path = request.nextUrl.pathname;

    // add all functions which is required for start app
    if (path === "/") {
      return NextResponse.redirect(new URL("/home", request.url));
    }

    return middleware(request, event);
  };
}

module.exports = Starter;
