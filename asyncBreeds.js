const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('* breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("* In readFile's Callback...");
    if (error) {
      console.log("  ...an error occurred.");
    } else {
      console.log("  ...success - we have data!");
      console.log("* Invoking the callback function that we passed into breedDetailsFromFile");
      callback(data);
    }
  });
};

console.log("* Defining a callback function that will receive and log out the data");
const callback = (data) => {
  console.log("* In breedDetailsFromFiles's Callback...");
  console.log('* Return Value: ', data);
};

console.log("* Calling breedDetailsFromFile with a string and the callback function");
breedDetailsFromFile(process.argv[2] ? process.argv[2] : 'Bombay', callback);