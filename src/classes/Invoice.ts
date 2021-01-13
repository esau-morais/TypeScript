import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  readonly client: string; // Allow to read, but not to change outside
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a
  }

  /* Another way -> It workds just if we assign public , private, and readonly
    contructor(
      readonly client: string
    )
  */

  format() {
    return `${this.client} owes ₤${this.amount} to ${this.details}`
  }
}
