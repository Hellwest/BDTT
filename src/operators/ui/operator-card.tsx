import React, { ReactElement } from "react"
import styled from "styled-components"

import { OperatorName } from "./operator-name"
import { OperatorDescription } from "./operator-description"
import { OperatorImage } from "./operator-image"

type Props = {
  name: string
  image: string
  alt: string
}

const CardContainer = styled.div`
  display: inline-block;
  margin: 30vh 100px;
  padding: 20px;
  min-width: 220px;
  background-color: white;
  border: solid 1px black;
  border-radius: 6px;
  text-decoration: none;
  color: inherit;
`

export const OperatorCard = ({ name, image, alt }: Props): ReactElement => (
  <CardContainer as="a" href="/operator?id=operator-id">
    <OperatorName name={name} />
    {image ? (
      <OperatorImage image={image} />
    ) : (
      <OperatorDescription alt={alt} />
    )}
  </CardContainer>
)
