import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/single-rewind",
    "/double-rewind",
    "/",
    "/triple-rewind",
    "/push",
    "/push/:player",
    "/other-app",
    "/calculator",
    "/about-me",
    "/teams",
    "/time-rewind",
    "/follows"
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
