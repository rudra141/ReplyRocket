import { AppLogo } from "@/components/AppLogo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background p-4">
      <div className="mb-8">
        <AppLogo />
      </div>
      {children}
    </div>
  );
}
