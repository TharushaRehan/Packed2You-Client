import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (req.nextUrl.pathname.startsWith("/shop")) {
    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  const emailLinkError = "Email link is invalid or has expired";
  if (
    req.nextUrl.searchParams.get("error_description") === emailLinkError &&
    req.nextUrl.pathname !== "/auth/signup"
  ) {
    return NextResponse.redirect(
      new URL(
        `/signup?error_description=${req.nextUrl.searchParams.get(
          "error_description"
        )}`,
        req.url
      )
    );
  }

  if (["/auth/login", "/auth/signup"].includes(req.nextUrl.pathname)) {
    if (session) {
      return NextResponse.redirect(new URL("/shop", req.url));
    }
  }
  return res;
}

// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextResponse } from "next/server";

// import type { NextRequest } from "next/server";
// import type { Database } from "@/lib/supabase/supabase.types";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();

//   // Create a Supabase client configured to use cookies
//   const supabase = createMiddlewareClient<Database>({ req, res });

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   // if user is signed in and the current path is / redirect the user to /dashboard
//   if (user && req.nextUrl.pathname === "/") {
//     //await supabase.auth.signOut()
//     return NextResponse.redirect(new URL("/shop", req.url));
//   }

//   // if user is not signed in and the current path is not / redirect the user to /
//   if (!user && req.nextUrl.pathname !== "/") {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return res;
// }

// // Ensure the middleware is only called for relevant paths.
// export const config = {
//   matcher: ["/shop", "/login"],
//   // matcher: [
//   //   /*
//   //    * Match all request paths except for the ones starting with:
//   //    * - _next/static (static files)
//   //    * - _next/image (image optimization files)
//   //    * - favicon.ico (favicon file)
//   //    */
//   //   "/((?!_next/static|_next/image|favicon.ico).*)",
//   // ],
// };
