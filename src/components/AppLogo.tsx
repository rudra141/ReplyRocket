
import Link from "next/link";
import { Rocket } from "lucide-react";

export const AppLogo = () => (
  <Link href="/" className="flex items-center gap-2 text-xl font-bold">
    <Rocket className="h-6 w-6 text-primary-foreground" />
    <span className="text-primary-foreground">ReplyRocket</span>
  </Link>
);
