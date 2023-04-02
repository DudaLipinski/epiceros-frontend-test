import { SubmitHandler, useForm } from 'react-hook-form'
import { TeamList } from '../../components/TeamList'
import { useEmployeeCreation } from '../../queries/team'
import { Employee } from '../../types/team'
import { Button } from '../../components/Button'
import * as Styled from './Register.styles'

const Register = () => {
  const { register, handleSubmit } = useForm<Employee>()
  const { mutate } = useEmployeeCreation()

  const onSubmit: SubmitHandler<Employee> = (employee) => mutate(employee)

  return (
    <Styled.Wrapper>
      <Styled.EmployeesColumn>
        <Styled.Title>
          Join <br />
          the
          <br />
          team
        </Styled.Title>
        <TeamList />
      </Styled.EmployeesColumn>
      <Styled.Content>
        <Styled.SecondaryTitle>Register</Styled.SecondaryTitle>
        <Styled.Subtitle>
          Team player - Be positive - Beat yesterday
        </Styled.Subtitle>
        <Styled.Text>
          Together we re-define the experience of online gaming through
          gamification and novel technical solutions.
        </Styled.Text>
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
          <Styled.InputText
            type="text"
            placeholder="Name"
            required
            aria-label="Name"
            {...register('name')}
          />
          <Styled.InputText
            type="email"
            placeholder="Email"
            required
            aria-label="E-mail"
            {...register('email')}
          />
          <label>
            <input type="checkbox" name="terms" required />I agree to the terms
            <span> and I'll bring nice fika every friday ;)</span>
          </label>
          <Button variant="solid" color="primary">
            I'm in, sign me up!
          </Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default Register
