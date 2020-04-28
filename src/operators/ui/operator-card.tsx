import React, { ReactElement } from "react"
import styled from "styled-components"
import { OperatorName } from "./operator-name"
import { OperatorDescription } from "./operator-description"

type Props = {
  name: string
  image?: string
  alt: string
}

const CardContainer = styled.div`
  display: inline-block;
  margin: 20px;
  padding: 20px;
  min-width: 220px;
  background-color: white;
  border: solid 1px black;
  border-radius: 6px;
`

export const OperatorCard = ({ name, alt }: Props): ReactElement => (
  <CardContainer>
    <OperatorName name={name} />
    <OperatorDescription alt={alt} />
  </CardContainer>
)
