import React, { ReactElement } from "react"
import { Form, FormikProps } from "formik"

import { Box } from "../../ui/box"

import { PhoneInputField } from "./phone-input-field"
import { SumInputField } from "./sum-input-field"

interface Props {
  isSuccessful: boolean
  formikBag: FormikProps<PaymentInput>
}

export const PaymentView = ({
  isSuccessful,
  formikBag,
}: Props): ReactElement => (
  <Form>
    <Box
      display="flex"
      width="300px"
      flexDirection="column"
      justifyContent="space-around"
    >
      <PhoneInputField {...formikBag} />
      <SumInputField {...formikBag} />
      <button type="submit" disabled={formikBag.isSubmitting || isSuccessful}>
        {!isSuccessful ? "Оплатить" : "Перенаправление..."}
      </button>
    </Box>
  </Form>
)
