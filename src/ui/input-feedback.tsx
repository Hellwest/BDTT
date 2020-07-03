import React, { ReactElement } from "react"
import { ErrorMessage } from "formik"
import styled from "styled-components"

import { Box } from "./box"

interface Props {
  name: string
}

const Feedback = styled.div`
  color: red;
`

export const InputFeedback = ({ name }: Props): ReactElement => (
  <Box height="20px">
    <ErrorMessage
      name={name}
      render={(message): ReactElement => <Feedback>{message}</Feedback>}
    />
  </Box>
)
