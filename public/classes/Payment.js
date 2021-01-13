export class Payment {
    constructor(c, d, a) {
        this.ricipient = c;
        this.details = d;
        this.amount = a;
    }
    /* Another way -> It workds just if we assign public , private, and readonly
      contructor(
        readonly ricipient: string
      )
    */
    format() {
        return `${this.ricipient} is owed ₤${this.amount} for ${this.details}`;
    }
}
