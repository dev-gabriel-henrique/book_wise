import { globalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { Aside } from "@/components/Aside";

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  const isLoginPage = router.pathname === "/login";
  return (
    <SessionProvider session={session}>
      {!isLoginPage && <Aside />}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
