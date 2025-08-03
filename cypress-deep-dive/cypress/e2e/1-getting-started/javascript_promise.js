function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

// Call greet and pass sayBye as a callback
greet("Alice", sayBye);
