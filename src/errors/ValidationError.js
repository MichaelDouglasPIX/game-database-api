import IncorrectRequest from './IncorrectRequest.js';

class ValidationError extends IncorrectRequest {
  constructor(error) {
    const errorMessage = Object.values(error.errors)
      .map((error) => error.message)
      .join('; ');
    super(`the following errors were found: ${errorMessage}`);
  }
}

export default ValidationError;
