import { CustomErrors } from './custom-errors';

// hard code to forbidden error
export class NotAuthorizedError extends CustomErrors {
  statusCode = 401;
  constructor() {
    super('Unauthorized access');
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeError() {
    return [
      {
        message: 'Unauthorized access',
      },
    ];
  }
}
