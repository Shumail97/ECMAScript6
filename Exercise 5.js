/** @format */

const user = {
  name: "John",
};

// does it work?
user.name = "Pete";
console.log(user);    // {name: 'Pete'}

//No, it's not possible to change the object itself when declared with const, but you can modify its properties.
