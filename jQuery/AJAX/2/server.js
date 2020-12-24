projectData ={};

//expressto run server
const express = require('express');


//start up an instance app
const app = express();


/*Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//favicon

//cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/*Initializing the main projet folder */
app.use(express.static('website'));
app.use(express.static('public'));

const port = 3000;
const server =app.listen(port,listening);
function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}