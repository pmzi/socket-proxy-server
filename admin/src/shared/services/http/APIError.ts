export default class APIError extends Error {
  response: Response;

  constructor({
    message, response,
  }: { message: string; response: Response; isAborted?: boolean }) {
    super(message);

    this.response = response;
  }
}
