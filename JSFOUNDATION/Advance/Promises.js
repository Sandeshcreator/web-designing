function fectchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucess = false;
      if (sucess) {
        resolve("Data fetched sucessfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

fectchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
