import React, { ReactElement } from "react"
import { Field } from "formik"

import { InputFeedback } from "../../ui/input-feedback"
import { Box } from "../../ui/box"

const sum = "sum"

export const SumInputField = (): ReactElement => (
  <Box display="flex" flexDirection="column">
    <label htmlFor={sum}>Сумма:</label>
    <Field id={sum} name={sum} />
    <InputFeedback name={sum} />
  </Box>
)
