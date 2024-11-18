export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood); // `this` se refiere al objeto actual
    return this.sanFranciscoNeighborhoods;
  };
}
