import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ReplyRocket',
  description: 'Send better cold outreach. Close more deals.',
};

export async function generateStaticParams() {
  return [];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href={`https://${process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}`} />
        </Head>
        <body className={`${inter.variable} font-body antialiased`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
