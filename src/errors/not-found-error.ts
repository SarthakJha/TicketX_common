import { CustomErrors } from './custom-errors';

export class NotFoundError extends CustomErrors {
  statusCode = 404;
  constructor() {
    super('route not found');
    // this is boiler-plate
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeError() {
    return [{ message: 'not found' }];
  }
}
