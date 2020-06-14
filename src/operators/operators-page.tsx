import React, { ReactElement } from "react"
import styled from "styled-components"

import operators from "../../operators-data/operators.json"

import { OperatorCard } from "./ui/operator-card"

interface OperatorProperties {
  id: number
  name: string
  image: string
  alt: string
}

const OperatorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: 100vh;

  @media (max-width: 1350px) and (min-height: 560px) {
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 1024px) and (min-height: 767px) {
    flex-direction: row;
  }
`

export const OperatorsPage = (): ReactElement => (
  <OperatorsContainer>
    {operators.map((operator: OperatorProperties) => (
      <OperatorCard
        key={operator.id}
        name={operator.name}
        image={operator.image}
        alt={operator.alt}
      />
    ))}
  </OperatorsContainer>
)
