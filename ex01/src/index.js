var myPet = {
    species: "Doberman",
    name: "Tesla",
    legs: 4,
    friends: ["John", "Shakira"]
};
function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };