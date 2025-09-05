import type { Metadata } from "next";
import { Rethink_Sans } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "next-themes"

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "react-hot-toast";

const geist = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
})



export const metadata: Metadata = {
  title: "CollegePro",
  description: "College Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geist.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >


          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
