export default function createResponse(code: number, message: string): string {
  return `HTTP/1.0 ${code}\n\n${message}`;
}
