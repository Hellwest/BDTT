import React, { ReactElement, ReactNode } from "react"
import styled from "styled-components"

import { ButtonTypes } from "../utils/button-types"

interface Props {
  type?: ButtonTypes
  isDisabled?: boolean
  children?: ReactNode
}

const ButtonStyle = styled.button`
  padding: 10px;
  background-color: white;
  border-radius: 10px;

  :focus {
    outline: none;
  }
`

export const StyledButton = ({
  type,
  isDisabled,
  children,
}: Props): ReactElement => (
  <ButtonStyle type={type} disabled={isDisabled}>
    {children}
  </ButtonStyle>
)
