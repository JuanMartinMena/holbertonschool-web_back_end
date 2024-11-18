// 10-car.js

const cloneSymbol = Symbol("clone"); // Create a unique symbol for the clone method

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  [cloneSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Expose the cloneCar method publicly
  cloneCar() {
    return this[cloneSymbol]();
  }
}

export default Car;
