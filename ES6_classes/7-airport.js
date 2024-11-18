// 7-airport.js
export default class Airport {
  constructor(name, code) {
    this._name = name; // Store the name attribute
    this._code = code; // Store the code attribute
  }

  // Override toString method to return the airport code
  toString() {
    return `[object ${this._code}]`; // Return the formatted string with airport code
  }
}
