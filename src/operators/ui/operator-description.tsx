import React, { ReactElement } from "react"

interface Props {
  alt: string
}

export const OperatorDescription = ({ alt }: Props): ReactElement => (
  <p>{alt}</p>
)
