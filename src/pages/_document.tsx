import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="h-[200vh] min-h-screen bg-white bg-bodyPattern bg-cover font-sans text-slate-900 antialiased dark:bg-dark-900 dark:text-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
