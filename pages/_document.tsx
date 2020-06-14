/* eslint-disable filenames/match-regex */
import React, { ReactElement } from "react"
import {
  default as NextDocument,
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document"

class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initalProps = await NextDocument.getInitialProps(ctx)

    return { ...initalProps }
  }

  render(): ReactElement {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
