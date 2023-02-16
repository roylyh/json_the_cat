const { jar } = require("request");
const request = require("request");
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please input your parameter. Only one. Thank you.");
  process.exit();
}

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  // console.log("body: ", body);
  // console.log(typeof body);
  if (error) {
    console.log("Error: ", error);
  } else {
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log('There is no breed which is named as ', args[0]);
    }
    
  // console.log(typeof data);
  }
  
  
}
);