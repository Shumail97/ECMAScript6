let user = {
  name: "John",
  years: 30,
};

//Declared the user.name into name variable.

let name = user.name;

//Declared the user.years into age variable.

let age = user.years;

// isAdmin property into the a variable isAdmin (false if absent)
let isAdmin = user.isAdmin !== undefined ? user.isAdmin : false;

console.log(isAdmin)
