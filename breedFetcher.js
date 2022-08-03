const request = require('request');
const cat = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?name=${cat}`, (err, res, bod) => {
  //console.log(res.statusCode);
  if (!err) {
    let bodObj = JSON.parse(bod);
    if (bodObj.length > 0) {
      console.log(JSON.parse(bod)[0].description);
    } else {
      console.log('Breed not found');
    }
  } else {
    console.log(err);
  }
});