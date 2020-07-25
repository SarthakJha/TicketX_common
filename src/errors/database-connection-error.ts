import { CustomErrors } from './custom-errors';
export default class DatabaseConnectionError extends CustomErrors {
  reason = 'error connecting to DB';
  statusCode = 500;
  constructor() {
    super('db error');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeError() {
    return [{ message: this.reason }];
  }
}
