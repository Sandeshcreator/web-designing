const person = {
  name: "Sandesh",
  greet() {
    console.log(`Hello its me ${this.name}`);
  },
};

person.greet();

const greetFunc = person.greet;
greetFunc();

const bound = person.greet.bind({ name: "Random" });
bound();
