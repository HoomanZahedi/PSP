import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Box } from "@mui/material";
import ReactQueryProvider from "../reactQueryProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ReactQueryProvider >
            {children}
        </ReactQueryProvider>
  );
}
