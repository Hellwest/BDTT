import React, { ReactElement } from "react"
import styled from "styled-components"
import Link from "next/link"

import { Box } from "../../ui/box"
import { routes } from "../../routes"

import { OperatorName } from "./operator-name"
import { OperatorImage } from "./operator-image"

const StyledBox = styled(Box)`
  text-decoration: none;
  cursor: pointer;
`

// FIXME: link preview is not displayed by browser when hovering an operator
export const OperatorCard = ({
  id,
  name,
  image,
  alt,
}: OperatorProperties): ReactElement => (
  <Link href={`${routes.operator}?id=${id}`}>
    <StyledBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      color="inherit"
    >
      <OperatorName name={name} />
      <OperatorImage image={image} alt={alt} />
    </StyledBox>
  </Link>
)
