import mongoose from 'mongoose';
import ErrorConstruction from '../errors/ErrorConstruction.js';
import IncorrectRequest from '../errors/IncorrectRequest.js';
import ValidationError from '../errors/ValidationError.js';

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  console.error('Error:', error);
  if (error instanceof mongoose.Error.CastError) {
    new IncorrectRequest().send(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).send(res);
  } else if (error instanceof ErrorConstruction) {
    error.send(res);
  } else {
    new ErrorConstruction().send(res);
  }
}

export default errorHandler;
