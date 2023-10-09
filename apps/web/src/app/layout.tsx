import "./globals.css";

import type { Metadata } from "next";
import { headers } from "next/headers";
import { meta } from "@acme/shared";
import { ProtocolAuthProvider } from "@protoxyz/auth/client";
import { UserButton } from "@protoxyz/components";
import { AuthAppearance } from "@protoxyz/themes";

import { Container } from "@/components/container";
import { inter } from "@/lib/fonts";
import { TRPCReactProvider } from "../components/providers";

const appearance: AuthAppearance = {
  layout: {
    logoPlacement: "none",
  },
};

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: `%s | ${meta.title}`,
  },
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "en_US",
    url: meta.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className}  h-full min-h-screen bg-gray-50`}>
        <ProtocolAuthProvider appearance={appearance}>
          <TRPCReactProvider headers={headers()}>
            <Container
              className="flex-row items-center justify-between px-4 py-8 lg:px-0"
              size="lg"
            >
              <div className="text-3xl font-bold">Acme, Inc.</div>
              <UserButton />
            </Container>
            {children}
          </TRPCReactProvider>
        </ProtocolAuthProvider>
      </body>
    </html>
  );
}
