interface OperatorProperties {
  id: number
  name: string
  image: string
  alt: string
}

interface PaymentInput {
  phone: string
  sum: string
}

type EnumLiteralsOf<T extends object> = T[keyof T]
