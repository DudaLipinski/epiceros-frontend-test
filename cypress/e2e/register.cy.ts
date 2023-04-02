import { APP_URL } from '../constants'

describe('Register tests', () => {
  const randomNumber = Math.floor(Math.random() * 1000000)

  it('Should create a new employee', () => {
    cy.visit(APP_URL)

    cy.get('input[name="name"]').type('Lipinski')
    cy.get('input[name="email"]').type(`${randomNumber}@test.com`)
    cy.get('input[name="terms"]').click()
    cy.findByRole('button', { name: "I'm in, sign me up!" }).click()

    cy.findByTestId('team-list').should('contain.text', 'Lipinski')
  })
})
