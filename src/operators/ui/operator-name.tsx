import React, { ReactElement } from "react"

import { Box } from "../../ui/box"

interface Props {
  name: string
}

export const OperatorName = ({ name }: Props): ReactElement => <Box>{name}</Box>
