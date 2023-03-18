export class BadRequestError extends Error {
  public static code = 400;

  constructor(public message: string) {
    super(message);
  }
}
