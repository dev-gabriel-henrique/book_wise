import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@/lib/stitches.config";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
