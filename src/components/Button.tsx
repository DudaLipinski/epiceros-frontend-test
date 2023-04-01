import styled, { FlattenSimpleInterpolation, css } from 'styled-components'

type Color = 'primary'
type Variant = 'text' | 'solid' | 'outlined'
const variantStyles: Record<
  Variant,
  (color: Color) => FlattenSimpleInterpolation
> = {
  text: (color) => css`
    color: var(--adm-color-${color});
  `,
  solid: (color) => css`
    background: var(--adm-color-${color});
    color: white;
  `,
  outlined: (color) => css`
    background: none;
    border: 1px solid var(--adm-color-${color});
    color: var(--adm-color-${color});
  `,
}

export const Button = styled.button<{ variant: Variant; color: Color }>`
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 0.25rem;
  border-style: none;
  font-size: 100%;
  line-height: 1.15;
  cursor: pointer;
  transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;

  :hover {
    transform: scale(1.05);
    transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
  }

  ${({ color, variant }) => variantStyles[variant](color)}
`
