const request = require("request");
const name = process.argv[2];
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${name}`,
  (error, response, body) => {
    if (error) {
      console.log("Failed to request details:", error);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log(`Failed to find breed ${name}`);
      return
    }
    // console.log(data);
    // console.log(typeof data);
    console.log("description:", data[0].description);
  }
);
