// Class + Interface

import { HasFormatter } from '../interfaces/HasFormatter';

export class Invoice implements HasFormatter {
  constructor(
    public client: string,
    private details: string,
    readonly amount: number
  ) {}

  // since in Interfaces, format() is defined, so below format function must exists.
  format() {
    return `${this.client} owes Nrs.${this.amount} for ${this.details}`;
  }
}
