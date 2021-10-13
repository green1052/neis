export class InvalidCodeError extends Error {
    constructor(message: string) {
        super(message);

        this.name = "Invalid code";
        this.message = message;
    }
}
