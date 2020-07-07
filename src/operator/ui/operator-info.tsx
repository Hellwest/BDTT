import React, { ReactElement } from "react"

import { Box } from "../../ui/box"
import { OperatorImage } from "../../operators/ui/operator-image"
import { OperatorName } from "../../operators/ui/operator-name"

export const OperatorInfo = ({
  name,
  image,
  alt,
}: OperatorProperties): ReactElement => (
  <Box display="flex" flexDirection="column" textAlign="center">
    <OperatorName name={name} />
    <OperatorImage image={image} alt={alt} />
  </Box>
)
