import { setTimeout } from "timers"

import React, { ReactElement, ReactText } from "react"
import {
  Formik,
  FormikHelpers as FormikActions,
  FormikProps,
  Form,
  ErrorMessage,
} from "formik"
import { useRouter } from "next/dist/client/router"
import { toast } from "react-toastify"
import MaskedInput from "react-text-mask"

import { Box } from "../../ui/box"
import { PaymentInputSchema } from "../../validation-schemas/payment-input.schema"
import { routes } from "../../routes"
import { toastOptions } from "../../utils/toast-options"
import { phoneMask } from "../../utils/phone-mask"

const failToast = (): ReactText =>
  toast.error("Ошибка при оплате", toastOptions)

const successToast = (): ReactText =>
  toast.success("Успешная оплата", toastOptions)

export const PaymentForm = (): ReactElement => {
  const router = useRouter()

  const initialValues: PaymentInput = {
    phone: "",
    sum: 0,
  }

  const handleSubmit = (
    _values: PaymentInput,
    { setSubmitting, setFieldValue }: FormikActions<PaymentInput>,
  ): void => {
    setTimeout(() => {
      const isSuccessful = Math.round(Math.random())

      if (!isSuccessful) {
        failToast()
        setFieldValue("sum", "")
        setSubmitting(false)

        return
      }

      successToast()

      setTimeout(() => router.push(routes.index), 3000)
      setSubmitting(false)
    }, 0)
  }

  return (
    <Box marginTop="100px">
      <Formik
        initialValues={initialValues}
        validationSchema={PaymentInputSchema}
        onSubmit={handleSubmit}
        component={(formikBag: FormikProps<PaymentInput>): ReactElement => (
          <Form>
            <Box display="flex" flexDirection="column">
              <MaskedInput
                value={formikBag.values.phone}
                type="tel"
                mask={phoneMask}
                name="phone"
                onChange={formikBag.handleChange}
              />
              <ErrorMessage name="phone" />
              <input
                value={formikBag.values.sum}
                name="sum"
                onChange={formikBag.handleChange}
              />
              <ErrorMessage name="sum" />
              <button type="submit" disabled={formikBag.isSubmitting}>
                {"Submit"}
              </button>
            </Box>
          </Form>
        )}
      />
    </Box>
  )
}
