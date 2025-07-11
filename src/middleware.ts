import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // Public routes that don't require authentication
  publicRoutes: [
    "/",
    "/login",
    "/sign-up",
    "/privacy",
    "/terms"
  ],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ],
};
