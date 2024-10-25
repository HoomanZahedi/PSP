
import "../globals.css";
import ReactQueryProvider  from "../reactQueryProvider";
import ClientSidePage from "../clientSidePage";
import { cookies } from 'next/headers';
import { Box } from "@mui/material";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const cookie:ReadonlyRequestCookies = await cookies();

    const userRole = cookie && cookie.get('userData') && JSON.parse(cookie.get('userData')?.value as string).role;
    
  return (
        <ReactQueryProvider >
          <ClientSidePage role={userRole}/>
          <Box marginTop={'64px'} height={'calc(100vh - 64px)'}>
            {children}
          </Box>
        </ReactQueryProvider>
  );
}
