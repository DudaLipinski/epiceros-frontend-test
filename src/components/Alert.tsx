import styled from 'styled-components'
import { Severity } from '../types/theme'

export const Alert = styled.div<{ $severity: Severity }>`
  background: var(--adm-color-${({ $severity }) => $severity});
  padding: 0.5rem;
  font-size: 0.75rem;
`
