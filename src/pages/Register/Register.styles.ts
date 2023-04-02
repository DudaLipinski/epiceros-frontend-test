import styled from 'styled-components'
import background from '../../assets/background.svg'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const EmployeesColumn = styled.section`
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 15em;
  height: 100%;

  background-color: var(--adm-color-primary);
  background-image: url(${background});
  padding: 2rem 4rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 2rem 2rem;
  }
`

export const Title = styled.h1`
  margin: 0.67em 0;
  font-size: 3rem;
  color: var(--adm-color-white);
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 2.6rem;
    margin: 0.3em 0.8em 0.3em 0;
  }
`

export const Content = styled.section`
  box-sizing: border-box;
  max-width: 32rem;
  padding-left: 4rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2rem 2rem;
  }
`

export const SecondaryTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 4rem;
  font-size: 1.5rem;
  color: var(--adm-color-sapphire);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export const Subtitle = styled.h3`
  font-size: 1.25rem;
  line-height: 1.15;
  color: var(--adm-color-sapphire);
`

export const Text = styled.p`
  max-width: 30em;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--adm-color-black-600);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    margin: 0.8rem 0 1rem;
  }

  label {
    padding-top: 0.6rem;
    padding-left: 0.2rem;
    padding-bottom: 0.8rem;
  }

  span {
    color: var(--adm-color-white);
    font-size: 0.75rem;
  }
`

export const InputText = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
  margin: 0.3rem 0;

  border-radius: 0.25rem;
  border: 1px solid var(--adm-color-black-300);
  padding-left: 0.5rem;
  line-height: 1.15;
  font-size: 100%;
`
