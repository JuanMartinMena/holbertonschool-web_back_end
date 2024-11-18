// 8-hbtn_class.js
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // Store the size attribute
    this._location = location; // Store the location attribute
  }

  // Method to cast the class to a number
  valueOf() {
    return this._size; // When cast to a Number, return the size
  }

  // Method to cast the class to a string
  toString() {
    return this._location; // When cast to a String, return the location
  }
}
