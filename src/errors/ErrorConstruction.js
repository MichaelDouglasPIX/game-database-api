class ErrorConstruction extends Error {
    constructor(message = "internal server error.", status = 500) {
        super();
        this.message = message;
        this.status = status;
    }

    send(res) {
        res.status(this.status).send({
            message: this.message,
            status: this.status
        });
    }
};

export default ErrorConstruction;