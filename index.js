const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please input your parameter. Only one. Thank you.");
  process.exit();
}

fetchBreedDescription(args[0], (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(desc);
  }
}
);