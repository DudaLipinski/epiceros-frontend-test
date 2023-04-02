import styled from 'styled-components'
import { useTeam } from '../queries/team'
import { getErrorMessage } from '../utils/api'
import { Alert } from './Alert'

const Styled = {
  List: styled.ul`
    padding-left: 1rem;
    line-height: 1.5;
    color: var(--adm-color-white);

    li:last-child {
      opacity: 0.1;
    }
  `,
}

export const TeamList = () => {
  const { data: team, isError, error, isLoading } = useTeam()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return <Alert $severity="error">{getErrorMessage(error)}</Alert>
  }

  const itemList = team?.map((employee, index) => {
    const { name } = employee
    return <li key={`${name}-${index}`}>{name}</li>
  })

  return (
    <Styled.List>
      {itemList}
      <li>Maria</li>
    </Styled.List>
  )
}
