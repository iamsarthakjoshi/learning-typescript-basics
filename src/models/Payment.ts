// Class + Interface

import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter {
  constructor(
    public recipient: string,
    private details: string,
    readonly amount: number
  ) {}

  // since in Interfaces, format() is defined, so below format function must exists.
  format() {
    return `${this.recipient} is owed Nrs.${this.amount} for ${this.details}`;
  }
}
