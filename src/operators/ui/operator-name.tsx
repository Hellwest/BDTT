import React, { ReactElement } from "react"

interface Props {
  name: string
}

export const OperatorName = ({ name }: Props): ReactElement => <p>{name}</p>
