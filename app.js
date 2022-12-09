//create express app
import express from "express"
//import cors library
import cors from 'cors'
//create a new logger middleware function
import morgan from "morgan";
//import .env file
import 'dotenv/config';


import booksRouter from "./Routes/router.js"

//create variable storing the express package
const app =express()

// imports PORT from .env; process.env contains our environmental variable
const PORT = process.env.PORT;
// the * wildcard allows access from any origin
app.use(cors("*"));


//creates ELEPHANT variable that is a connection to database
const BOOKSDB = process.env.POSTGRES_CONNECTION_URL;


// setup morgan using dev
//Above setup will start logging requests in console
// dev - Concise output colored by response status for development use. The :status token will be colored green for success codes, 
// red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for information codes.
app.use(morgan("dev"));

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
// For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static("../public"));

app.use(express.json());

app.use("/api/books", booksRouter);

app.listen(PORT, ()=>{console.log(`This server is running on ${PORT}`)})