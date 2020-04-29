import React, { ReactElement } from "react"

interface Props {
  image: string
}

export const OperatorImage = ({ image }: Props): ReactElement => (
  <img src={image} width="400px" height="200px" />
)
