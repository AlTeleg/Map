export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    add(codeNumber, description) {
        this.errors.set(Number(codeNumber), description.toString());
    }

    translate(code) {
        if ((Array.from(this.errors.keys())).includes(+code)) {
            return this.errors.get(+code);
        }
        return 'Unknown error';
    }
}
