// Variable phrase is initialized and declared with the string "Hello".
let phrase = "Hello";

// A conditional block is executed since the condition is always true.

if (true) {

//  A variable user is declared and initialized with the string "John"..

  let user = "John";

// A function sayHi is declared. This function has access to the variables phrase and user due to JavaScript's lexical scoping.

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

// The sayHi function is defined, but not called, within the conditional block.
sayHi();

