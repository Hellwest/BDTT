/* eslint-disable filenames/match-regex */
import React, { ReactElement, Fragment } from "react"
import { default as NextApp } from "next/app"
import { GlobalStyle } from "../theme/theme"

class App extends NextApp {
  render(): ReactElement {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <Component {...pageProps} />
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App
