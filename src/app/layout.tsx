import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./styles/globals.css";
import "./styles/globals-2.css";
import "./styles/table.css";
import Header from "./components/Header";
import Help from "./components/Help";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accreditation",
  description: "accreditation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Header />
          {children}
          <Help />
        </AntdRegistry>
      </body>
    </html>
  );
}
