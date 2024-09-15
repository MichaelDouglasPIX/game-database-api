import mongoose from "mongoose";

function errorHandler(error, req, res, next) {
    if(error instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "one or more data provided is incorrect."});
    }else if (error instanceof mongoose.Error.ValidationError){
        const errorMessage = Object.values(error.errors).map(error => error.message).join("; ");
        res.status(400).send({message: `the following errors were found: ${errorMessage}`});
    }else {
        res.status(400).send({message: "internal server error."});
    }
};

export default errorHandler;