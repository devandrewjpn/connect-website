import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        />

        <link rel="icon" href={`https://agenciabrasildigital.com.br/projetos/connect/primary-favicon.svg`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
