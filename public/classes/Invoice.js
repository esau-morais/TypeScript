export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    /* Another way -> It workds just if we assign public , private, and readonly
      contructor(
        readonly client: string
      )
    */
    format() {
        return `${this.client} owes ₤${this.amount} to ${this.details}`;
    }
}
