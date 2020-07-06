import { setTimeout } from "timers"

import React, { ReactElement, ReactText, useState } from "react"
import { Formik, FormikHelpers as FormikActions, FormikProps } from "formik"
import { useRouter } from "next/dist/client/router"
import { toast } from "react-toastify"

import { PaymentInputSchema } from "../../validation-schemas/payment-input.schema"
import { routes } from "../../routes"
import { toastOptions } from "../../utils/toast-options"

import { PaymentView } from "./payment.view"

const failToast = (): ReactText =>
  toast.error("Ошибка при оплате", toastOptions)

const successToast = (): ReactText =>
  toast.success("Успешная оплата", toastOptions)

export const PaymentForm = (): ReactElement => {
  const router = useRouter()
  const [isSuccessful, setisSuccessful] = useState<boolean>(false)

  const initialValues: PaymentInput = {
    phone: "",
    sum: "",
  }

  const handleSubmit = (
    _values: PaymentInput,
    { setSubmitting }: FormikActions<PaymentInput>,
  ): void => {
    setTimeout(() => {
      const isSuccessful = Math.round(Math.random())

      if (!isSuccessful) {
        failToast()
        setSubmitting(false)

        return
      }

      successToast()
      setSubmitting(false)
      setisSuccessful(true)

      setTimeout(() => router.push(routes.index), 3000)
    }, 500)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PaymentInputSchema}
      onSubmit={handleSubmit}
      component={(formikBag: FormikProps<PaymentInput>): ReactElement => (
        <PaymentView isSuccessful={isSuccessful} formikBag={formikBag} />
      )}
    />
  )
}
