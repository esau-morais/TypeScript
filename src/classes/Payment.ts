import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  readonly ricipient: string; // Allow to read, but not to change outside
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.ricipient = c;
    this.details = d;
    this.amount = a
  }

  /* Another way -> It workds just if we assign public , private, and readonly
    contructor(
      readonly ricipient: string
    )
  */

  format() {
    return `${this.ricipient} is owed ₤${this.amount} for ${this.details}`
  }
}
