import { ValidationError } from 'express-validator';
import { CustomErrors } from './custom-errors';

export default class RequestValidationError extends CustomErrors {
  statusCode = 400;
  error: ValidationError[];
  constructor(errors: ValidationError[]) {
    super('validation error'); // important to add while inheriting any class
    this.error = errors;

    //have to write this cos we're inheriting a inbuilt class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  // shorter way of writing above code is [5-12]
  /*
  constructor(public error: ValidationError[]){
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }
  */
  serializeError() {
    return this.error.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}
//how to access this class:
//throw new RequestValidationError(error)
