import React, { ReactElement } from "react"
import styled from "styled-components"

import { Box } from "../../ui/box"
import operators from "../../../operators-data/operators.json"

import { OperatorCard } from "./operator-card"

interface OperatorProperties {
  id: number
  name: string
  image: string
  alt: string
}

const StyledBox = styled(Box)`
  @media (max-width: 1350px) and (min-height: 560px) {
    flex-direction: column;
    justify-content: space-between;
  }
`

export const OperatorsList = (): ReactElement => (
  <StyledBox
    display="flex"
    flexWrap="wrap"
    alignItems="center"
    justifyContent="space-around"
    height="100vh"
  >
    {operators.map(({ id, name, image, alt }: OperatorProperties) => (
      <OperatorCard key={id} id={id} name={name} image={image} alt={alt} />
    ))}
  </StyledBox>
)
