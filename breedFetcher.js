const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        // console.log("Error: ", error);
        callback(error, null);
      } else {
        const data = JSON.parse(body);
        if (data.length > 0) {
          // console.log(data[0].description);
          callback(null, data[0].description);
        } else {
          // console.log('There is no breed which is named as ', breedName);
          callback(`There is no breed which is named as ${breedName}`, null);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };
