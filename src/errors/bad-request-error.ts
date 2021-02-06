import { CustomErrors } from './custom-errors';

export class BadRequestError extends CustomErrors {
  /**
   * since we are ext an abstract class, implementing <serializeError()> and
   * <statusCode> is important
   * serializeError in abstract class shoul return
   * '{ message: string | any; field?: string }[]'
   * else it will show an error
   */
  statusCode = 400;
  constructor(public mes: string) {
    super(mes);
    // super(mes) is just for logging purposes
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeError() {
    return [
      {
        message: this.mes,
      },
    ];
  }
}
