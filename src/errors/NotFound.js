import ErrorConstruction from './ErrorConstruction.js';

class NotFound extends ErrorConstruction {
  constructor(message = 'page not found') {
    super(message, 404);
  }
}

export default NotFound;
