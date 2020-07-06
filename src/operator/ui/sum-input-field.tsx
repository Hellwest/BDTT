import React, { ReactElement, ChangeEvent } from "react"
import { Field, FormikProps } from "formik"

import { InputFeedback } from "../../ui/input-feedback"
import { Box } from "../../ui/box"

const sum = "sum"

export const SumInputField = ({
  handleChange: formikHandleChange,
}: FormikProps<PaymentInput>): ReactElement => {
  const handleChange = (event: ChangeEvent<{ value: string }>): void => {
    if (event.target.value.match(/\D/)) {
      return
    }

    formikHandleChange(event)
  }

  return (
    <Box display="flex" flexDirection="column">
      <label htmlFor={sum}>Сумма:</label>
      <Field id={sum} name={sum} onChange={handleChange} />
      <InputFeedback name={sum} />
    </Box>
  )
}
