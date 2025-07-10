import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return <SignIn path="/login" signUpUrl="/sign-up" />;
}
