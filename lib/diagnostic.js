// This script should take a plain text file with one number per line, as in
// integers.txt. It should add all the numbers and output the result to the
// console. For example:
//
//    node lib/diagnostic.js integers.txt #=> 15
//
// If there is a line with no number, it should be ignored. However, if there is
// a line with non-number content (for example, "foo"), an error should be
// logged to the console.
//
// You can verify your script is working by running `grunt test`.
//

'use strict';

const fs = require('fs');

let inFile = process.argv[2];

let main = (file) => {
  fs.readFile(file, { encoding: 'utf8' }, (error, content) => {
    if (error){
      console.error(error);
    }

    let lines = content.split('\n');
    let sum = 0;
    lines.forEach((line) => {
      if (isNaN(line)){
        console.log(line + "isn't a number!");
      }
      else{
        sum += Number(line);
      }
    });

    console.log("Sum:" + sum);
  });
};

main(inFile);

module.exports = main;
