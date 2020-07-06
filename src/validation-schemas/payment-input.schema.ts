import * as yup from "yup"

export const PaymentInputSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Введите валидный номер")
    .required("Обязательное поле"),
  sum: yup
    .number()
    .integer()
    .min(1, "Минимальная сумма - 1р.")
    .max(1000, "Максимальная сумма - 1000р.")
    .required("Обязательное поле"),
})
