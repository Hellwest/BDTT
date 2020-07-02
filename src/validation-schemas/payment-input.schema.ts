import * as yup from "yup"

export const PaymentInputSchema = yup.object().shape({
  phone: yup
    .string()
    .min(18)
    .max(18)
    .required("Обязательное поле"),
  sum: yup
    .number()
    .integer()
    .positive("Должно быть положительным числом")
    .max(1000, "Максимальная сумма - 1000р.")
    .required("Обязательное поле"),
})
