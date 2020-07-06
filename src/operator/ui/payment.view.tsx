import React, { ReactElement } from "react"
import { Form, FormikProps } from "formik"

import { Box } from "../../ui/box"

import { PhoneInputField } from "./phone-input-field"
import { SumInputField } from "./sum-input-field"

export const PaymentView = (
  formikBag: FormikProps<PaymentInput>,
): ReactElement => (
  <Form>
    <Box
      display="flex"
      width="300px"
      flexDirection="column"
      justifyContent="space-around"
    >
      <PhoneInputField {...formikBag} />
      <SumInputField {...formikBag} />
      <button type="submit" disabled={formikBag.isSubmitting}>
        {"Оплатить"}
      </button>
    </Box>
  </Form>
)
