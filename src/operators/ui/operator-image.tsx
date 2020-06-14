import React, { ReactElement } from "react"
import styled from "styled-components"

interface Props {
  image: string
  alt: string
}

const ImageContainer = styled.img`
  height: ${(p): string => (p.height ? p.height.toString() : "400px")};
  width: ${(p): string => (p.width ? p.width.toString() : "450px")};

  @media (max-width: 360px), (max-height: 640px) {
    height: 160px;
    width: 180px;
  }

  @media (max-width: 411px), (max-height: 731px) {
    height: 160px;
    width: 180px;
  }

  @media (max-width: 768px), (max-height: 1024px) {
    height: 250px;
    width: 200px;
  }

  @media (max-width: 414px), (max-height: 736px) {
    height: 160px;
    width: 180px;
  }

  @media (max-width: 320px), (max-height: 568px) {
    height: 100px;
  }
`

export const OperatorImage = ({ image, alt }: Props): ReactElement => (
  <ImageContainer src={image} alt={alt} />
)
