function sayHello() {
  console.log("Hello");
}

setTimeout(() => {
  sayHello();
}, 5000);

for (let index = 0; index < 10; index++) {
  console.log(index);
}
