// 4-pricing.js
import Currency from "./3-currency.js"; // Import Currency class

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError("currency must be an instance of Currency");
    }
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(value) {
    this._amount = value;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError("currency must be an instance of Currency");
    }
    this._currency = value;
  }

  // Method to display the full price in the format "amount currency_name (currency_code)"
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
