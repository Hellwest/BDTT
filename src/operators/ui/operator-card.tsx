import React, { ReactElement } from "react"

import { Box } from "../../ui/box"
import { routes } from "../../routes"

import { OperatorName } from "./operator-name"
import { OperatorImage } from "./operator-image"

export const OperatorCard = ({
  id,
  name,
  image,
  alt,
}: OperatorProperties): ReactElement => (
  <a href={`${routes.operator}?id=${id}`}>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      color="inherit"
    >
      <OperatorName name={name} />
      <OperatorImage image={image} alt={alt} />
    </Box>
  </a>
)
