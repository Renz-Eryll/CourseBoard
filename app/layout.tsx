import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/provider/ThemeProvider";

// Font configuration
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// App Metadata
export const metadata: Metadata = {
  title: "CourseBoard",
  description:
    "A modern dashboard for managing your subscription-based learning platform",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased flex min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <div className="flex flex-col flex-1 min-h-screen bg-background">
              <Navbar />
              <main className="flex-1 p-4">{children}</main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
