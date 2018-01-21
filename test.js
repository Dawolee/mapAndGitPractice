var pets = {
  Cream: {age:2, species: "gerbil"},
  Choco: {age:6, species: "dog"},
  Bubbles: {age:5, species: "fish"}
}

var keys = Object.keys(pets).map((pet) => {
  return pet + " is " + pets[pet].age + " years old and is a " + pets[pet].species;
}).sort().join(", ");
