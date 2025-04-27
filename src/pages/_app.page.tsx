import { globalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { AsideMenu } from "@/components/AsideMenu";
import { DefaultSeo } from "next-seo";

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  const isLoginPage = router.pathname === "/login";

  return (
    <>
      <SessionProvider session={session}>
        <DefaultSeo
          defaultTitle="BookWise"
          titleTemplate="BookWise | %s"
          openGraph={{
            type: "website",
            locale: 'pt-BR',
            url: 'https://bookwise.com.br',
            siteName: 'BookWise'
          }}
          additionalLinkTags={[
            {
              rel: "icon",
              href: "/favicon.svg",
              type: "image/svg+xml",
            },
            {
              rel: "alternate icon",
              href: "/favicon.ico",
            },
          ]}
        />
        {!isLoginPage && <AsideMenu />}
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
