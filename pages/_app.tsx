/* eslint-disable filenames/match-regex */
import React, { ReactElement, Fragment } from "react"
import { default as NextApp } from "next/app"
import { ToastContainer, toast } from "react-toastify"

import { GlobalStyle } from "../theme/theme"

import "react-toastify/dist/ReactToastify.css"

class App extends NextApp {
  render(): ReactElement {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <ToastContainer
          position={toast.POSITION.BOTTOM_RIGHT as "bottom-right"}
        />
        <Component {...pageProps} />
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App
