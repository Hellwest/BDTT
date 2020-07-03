import React, { ReactElement, Fragment, useEffect, useState } from "react"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"

import operators from "../../operators-data/operators.json"
import { Box } from "../ui/box"

import { PaymentForm } from "./ui/payment.form"
import { OperatorInfo } from "./ui/operator-info"

export const OperatorPage = (): ReactElement => {
  const router = useRouter()
  const [operatorName, setOperatorName] = useState<string>()

  const id = Number(router.query.id)

  const operator = operators.find((operator): boolean => operator.id === id)

  useEffect(() => {
    setOperatorName(operator?.name)
  })

  return (
    <Fragment>
      <Head>
        <title>Оператор связи {operatorName}</title>
      </Head>

      {operator && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <OperatorInfo
            id={operator.id}
            name={operator.name}
            image={operator.image}
            alt={operator.alt}
          />
          <PaymentForm />
        </Box>
      )}
    </Fragment>
  )
}
