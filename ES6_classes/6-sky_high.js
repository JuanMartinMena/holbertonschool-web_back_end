// 6-sky_high.js
import Building from "./5-building.js";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor to handle sqft
    this._floors = floors; // Store the floors attribute
  }

  // Getter for sqft (inherited from Building class)
  get sqft() {
    return this._sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
