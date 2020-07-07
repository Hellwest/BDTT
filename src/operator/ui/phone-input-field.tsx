import React, { ReactElement, FocusEvent } from "react"
import MaskedInput from "react-text-mask"
import { FormikProps } from "formik"
import styled from "styled-components"

import { phoneMask } from "../../utils/phone-mask"
import { Box } from "../../ui/box"
import { InputFeedback } from "../../ui/input-feedback"

const BorderedMaskedInput = styled(MaskedInput)`
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

const phone = "phone"

const handleClick = (event: FocusEvent<HTMLInputElement>): void => {
  const target = event.target
  const index = target.value.search(/_/)

  const nextDigit =
    target.selectionStart && +target.value[target.selectionStart]
  const previousDigit =
    target.selectionStart && +target.value[target.selectionStart - 1]

  if (!nextDigit && !previousDigit) {
    target.focus()
    target.setSelectionRange(index, index)
  }
}

export const PhoneInputField = ({
  values,
  handleChange,
}: FormikProps<PaymentInput>): ReactElement => (
  <Box display="flex" flexDirection="column" marginY="20px">
    <label htmlFor={phone}>Телефон:</label>
    <BorderedMaskedInput
      id={phone}
      value={values.phone}
      type="tel"
      mask={phoneMask}
      name={phone}
      onChange={handleChange}
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      onClick={handleClick}
    />
    <InputFeedback name={phone} />
  </Box>
)
