import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-gradient-to-r from-green-500 to-blue-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
