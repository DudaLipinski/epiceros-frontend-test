export const getErrorMessage = (error: unknown) => {
  const message = error instanceof Error ? error.message : 'An error ocurred'

  return message
}
