import React, { ReactElement } from "react"
import { FormikProps } from "formik"

import { InputFeedback } from "../../ui/input-feedback"
import { Box } from "../../ui/box"

const sum = "sum"

export const SumInputField = (
  formikBag: FormikProps<PaymentInput>,
): ReactElement => (
  <Box display="flex" flexDirection="column">
    <label htmlFor={sum}>Сумма:</label>
    <input
      id={sum}
      value={formikBag.values.sum}
      name={sum}
      onChange={formikBag.handleChange}
    />
    <InputFeedback name={sum} />
  </Box>
)
