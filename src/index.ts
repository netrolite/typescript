class Invoice {
  constructor(
    public client: string,
    public details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} is charged $${this.amount} for ${this.details}`
  }
}

const invoices: Invoice[] = [];

invoices.push(new Invoice("Bob", "washing", 120));
invoices.push(new Invoice("Rob", "writing code", 400));
console.log(invoices);

for (const invoice of invoices) {
  console.log(invoice.format());
}
