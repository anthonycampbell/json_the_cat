const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (err, res, bod) => {
    if (!err) {
      let bodObj = JSON.parse(bod);
      if (bodObj.length > 0) {
        callback(null, JSON.parse(bod)[0].description);
      } else {
        callback('Breed not found', null);
      }
    } else {
      callback(err, null);
    }
  });
};
module.exports = { fetchBreedDescription };