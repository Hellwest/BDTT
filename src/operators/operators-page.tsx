import React, { ReactElement } from "react"
import { OperatorCard } from "./ui/operator-card"
import operators from "../../operators-data/operators.json"
import styled from "styled-components"

interface OperatorProperties {
  id: number
  name: string
  image: string
  alt: string
}

const OperatorsContainer = styled.div`
  display: inline-block;
  margin: 60px 20px;
  height: 90vh;
  min-width: 2510px;
  max-width: 2510px;
  text-align: center;
  border: 1px solid blue;
  border-radius: 6px;
  background-color: #ece6e5;
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
