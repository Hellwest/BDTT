import React, { ReactElement } from "react"
import styled from "styled-components"

import { Box } from "../../ui/box"
import { OperatorImage } from "../../operators/ui/operator-image"
import { OperatorName } from "../../operators/ui/operator-name"

const StyledBox = styled(Box)`
  text-align: center;
`

export const OperatorInfo = ({
  name,
  image,
  alt,
}: OperatorProperties): ReactElement => (
  <StyledBox display="flex" flexDirection="column">
    <OperatorName name={name} />
    <OperatorImage image={image} alt={alt} />
  </StyledBox>
)
