//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
//Other Code
const port = 3000;
const pass = "ILoveProgramming";
var app = express();
var userValidated = false;
app.use(bodyParser.urlencoded({ extended: true }));


function passwordChecked(req, res, next)
{
    console.log(req.body);
    var passEntered = req.body["password"];
    if(passEntered == pass)
    {
        userValidated = true;
    }
     next();

}

app.use(passwordChecked);


app.get("/", (req, res) => 
{ 
    //Do something here...
    res.sendFile(__dirname + "/public/index.html")
})


app.post("/check" , (req, res) => 
{
    let message ="form submitted";
    console.log("message");
    if(userValidated)
    {
        res.sendFile(__dirname + "/public/secret.html")
    }
    else
    {
        res.sendFile(__dirname + "/public/index.html")
    }

})

app.listen(port, () => {
    console.log("Server running on http://localhost:" + port);
})

