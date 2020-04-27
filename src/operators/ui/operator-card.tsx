import React, { ReactElement } from "react"
import styled from "styled-components"

type Props = {
  name?: string
  image?: string
  alt?: string
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  min-width: 320px;
  background-color: white;
  border: solid 1px black;
  border-radius: 6px;
`

export const OperatorCard = ({ name, alt }: Props): ReactElement => (
  <CardContainer>
    {name}, {alt}
  </CardContainer>
)
