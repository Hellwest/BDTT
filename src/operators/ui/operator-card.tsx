import React, { ReactElement } from "react"
import styled from "styled-components"

import { OperatorName } from "./operator-name"
import { OperatorImage } from "./operator-image"

type Props = {
  name: string
  image: string
  alt: string
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
`

export const OperatorCard = ({ name, image, alt }: Props): ReactElement => (
  <CardContainer as="a" href="/operator?id=operator-id">
    <OperatorName name={name} />
    <OperatorImage image={image} alt={alt} />
  </CardContainer>
)
