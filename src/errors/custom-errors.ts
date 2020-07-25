export abstract class CustomErrors extends Error {
  // adding abstract before the attr makes it necessary to be implemented while
  // using this as a template
  abstract statusCode: number;
  constructor(error?: string) {
    super(error);
    Object.setPrototypeOf(this, CustomErrors.prototype);
  }
  abstract serializeError(): { message: string | any; field?: string }[];
}
