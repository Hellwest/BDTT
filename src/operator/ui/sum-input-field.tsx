import React, { ReactElement, ChangeEvent } from "react"
import { Field, FormikProps } from "formik"
import styled from "styled-components"

import { InputFeedback } from "../../ui/input-feedback"
import { Box } from "../../ui/box"

const StyledField = styled(Field)`
  margin: 5px 0;
  padding: 5px 10px;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-radius: 20px;

  :focus {
    outline: none;
  }
`

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
    <Box display="flex" flexDirection="column" marginBottom="10px">
      <label htmlFor={sum}>Сумма:</label>
      <StyledField id={sum} name={sum} onChange={handleChange} />
      <InputFeedback name={sum} />
    </Box>
  )
}
