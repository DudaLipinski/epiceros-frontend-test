import { TeamList } from '../components/TeamList'
import { useTeam, useEmployeeCreation } from '../queries/team'
import { Employee } from '../types/team'
import { getErrorMessage } from '../utils/api'
import { Button } from '../components/Button'
import * as Styled from './Register.styles'

export const Register = () => {
  const { data, isError, error } = useTeam()
  const { mutate } = useEmployeeCreation()

  const errorMessage = isError ? <div>{getErrorMessage(error)}</div> : null

  const itemsList = data ? (
    <TeamList team={data} />
  ) : (
    <p>Create the first employee</p>
  )

  const employee: Employee = { name: 'maria', email: 'duda@hotmail.com' }

  const createEmployee = () => {
    mutate(employee)
  }

  return (
    <Styled.Wrapper>
      <Styled.Aside>
        <Styled.Title>
          Join <br />
          the
          <br />
          team
        </Styled.Title>
        {errorMessage}
        {itemsList}
      </Styled.Aside>
      <Styled.FormWrapper>
        <Styled.SecondaryTitle>Register</Styled.SecondaryTitle>
        <Styled.Subtitle>
          Team player - Be positive - Beat yesterday
        </Styled.Subtitle>
        <Styled.Text>
          Together we re-define the experience of online gaming through
          gamification and novel technical solutions.
        </Styled.Text>
        <Styled.Form>
          <Styled.InputText type="text" placeholder="Name" />
          <Styled.InputText type="text" placeholder="Email" />
          <label>
            <input type="checkbox" name="terms" />I agree to the terms
            <span> and I'll bring nice fika every friday ;)</span>
          </label>
          <Button variant="solid" color="primary" onClick={createEmployee}>
            I'm in, sign me up!
          </Button>
        </Styled.Form>
      </Styled.FormWrapper>
    </Styled.Wrapper>
  )
}
