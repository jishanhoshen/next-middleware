import { NextResponse } from "next/server";

function nextMiddleware(functions, index = 0) {
  const current = functions[index];
  if (current) {
    const next = nextMiddleware(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}

module.exports = nextMiddleware;
