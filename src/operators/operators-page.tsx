import React, { ReactElement, Fragment } from "react"
import { OperatorCard } from "./ui/operator-card"
import operators from "../../operators-data/operators.json"
import styled from "styled-components"

interface OperatorProperties {
  id: number
  name: string
  image: string
  alt: string
}

const OperatorContainer = styled.div`
  display: inline-block;
`

export const OperatorsPage = (): ReactElement => (
  <Fragment>
    <OperatorContainer>
      {operators.map((operator: OperatorProperties) => (
        <OperatorCard
          key={operator.id}
          name={operator.name}
          image={operator.image}
          alt={operator.alt}
        />
      ))}
    </OperatorContainer>
  </Fragment>
)
