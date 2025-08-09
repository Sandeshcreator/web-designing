function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function getuserData() {
  try {
    console.log("Fetching user data..");
    const userData = await fetchUserData();
    console.log("User fetch data..");
    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error Fetching data", error);
  }
}

getuserData();
