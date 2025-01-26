function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will now work correctly

//Alternative solution:

let user = "Jane Doe";
console.log(greeter(user)); //This will also work correctly