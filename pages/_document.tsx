import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Meta = () => {
  return (
    <Head>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Assistant&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="he">
        <Head />
        <body>
          <Meta />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
