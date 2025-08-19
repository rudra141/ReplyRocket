
import { auth } from "@clerk/nextjs/server";
import { HomeClient } from "@/components/HomeClient";

export default function Home() {
  const { userId } = auth();

  return (
    <main className="flex flex-col min-h-screen bg-gray-950">
       <HomeClient isSignedIn={!!userId} />
    </main>
  );
}
