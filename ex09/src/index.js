function myFunction(myObj, checkProp) {
    var Titanic = {
        title: "Titanic",
        song: "My Heart Will Go On",
        genre: "drama"
    };
    Titanic.hasOwnProperty("title");
    return Titanic;

}
module.exports = myFunction;