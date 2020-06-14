import styled from "styled-components"
import {
  space,
  color,
  layout,
  flexbox,
  compose,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  TypographyProps,
  typography,
} from "styled-system"

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps

export const Box = styled.div<BoxProps>`
  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;

  ${compose(space, color, layout, flexbox, typography)}
`
