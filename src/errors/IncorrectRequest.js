import ErrorConstruction from './ErrorConstruction.js';

class IncorrectRequest extends ErrorConstruction {
  constructor(message = 'one or more data provided is incorrect.') {
    super(message, 400);
  }
}

export default IncorrectRequest;
