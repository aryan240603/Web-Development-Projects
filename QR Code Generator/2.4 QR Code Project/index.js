/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
    name: "URL",
    message: "Enter your website url:",
    type: "input",
    default: "www.google.com",
    },
    ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("Your Website Url is : ", answers);
    const a = answers.URL;
    var qr_svg = qr.image(a);
    qr_svg.pipe(fs.createWriteStream("qr_code.png"));
    
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      Console.log("OOPS! You entered wrong URL. Please try another URl.")
    } else {
      // Something else went wrong
    }
  });

