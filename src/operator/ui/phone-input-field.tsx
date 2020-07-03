import React, { ReactElement } from "react"
import MaskedInput from "react-text-mask"
import { FormikProps } from "formik"

import { phoneMask } from "../../utils/phone-mask"
import { Box } from "../../ui/box"
import { InputFeedback } from "../../ui/input-feedback"

const phone = "phone"

export const PhoneInputField = (
  formikBag: FormikProps<PaymentInput>,
): ReactElement => (
  <Box display="flex" flexDirection="column">
    <label htmlFor={phone}>Телефон:</label>
    <MaskedInput
      id={phone}
      value={formikBag.values.phone}
      type="tel"
      mask={phoneMask}
      name={phone}
      onChange={formikBag.handleChange}
    />
    <InputFeedback name={phone} />
  </Box>
)
