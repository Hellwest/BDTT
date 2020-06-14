import React, { ReactElement, Fragment } from "react"
import Head from "next/head"

import { OperatorsList } from "./ui/operators-list"

const operatorsPageTitle = "Операторы связи"

export const OperatorsPage = (): ReactElement => (
  <Fragment>
    <Head>
      <title>{operatorsPageTitle}</title>
    </Head>

    <OperatorsList />
  </Fragment>
)
