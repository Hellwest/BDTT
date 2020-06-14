import React, { ReactElement, Fragment, useEffect, useState } from "react"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"

import operators from "../../operators-data/operators.json"

export const OperatorPage = (): ReactElement => {
  const router = useRouter()
  const [operatorName, setOperatorName] = useState<string>()

  const id = Number(router.query.id)

  useEffect(() => {
    setOperatorName(
      operators.find((operator): boolean => operator.id === id)?.name,
    )
  })

  return (
    <Fragment>
      <Head>
        <title>Оператор связи {operatorName}</title>
      </Head>
      {`operatorId: ${id}`}
    </Fragment>
  )
}
