const fetchBreedDescription = require('./breedFetcher');
fetchBreedDescription(process.argv[2], (err, desc) => {
  if (err === null) {
    console.log(desc);
  } else {
    console.log('Error fetch details:', err);
  }
});