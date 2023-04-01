import styled from 'styled-components'
import { Team } from '../types/team'

const Styled = {
  List: styled.ul`
    padding-left: 1rem;
    line-height: 1.5;
    color: var(--adm-color-white);
  `,
}

export const TeamList = ({ team }: { team: Team }) => {
  const itemList = team.map((employee) => (
    <li key={employee.name}>{employee.name}</li>
  ))

  return <Styled.List>{itemList}</Styled.List>
}
