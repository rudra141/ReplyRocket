import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <SignIn path="/login" afterSignInUrl="/dashboard" />;
}
