import styled from "styled-components"
import {
  space,
  color,
  layout,
  flexbox,
  compose,
  typography,
  border,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  TypographyProps,
  BordersProps,
} from "styled-system"

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  BordersProps

export const Box = styled.div<BoxProps>`
  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;

  ${compose(space, color, layout, flexbox, typography, border)}
`
