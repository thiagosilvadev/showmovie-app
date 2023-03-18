export class UnauthorizedError extends Error {
  constructor() {
    super('Não Authorizado')
    this.name = 'UnauthorizedError'
  }
}
