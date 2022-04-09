const express = require('express');
const router = express.Router();

//Importing the handler functions of urlController
const { shortenUrl, getUrl }= require("../controllers/urlController")

//First API -: To take longUrl in request body and make shortUrl of it using POST method
router.post("/url/shorten" , shortenUrl)

//Second API -: To redirect to originalUrl by taking urlCode in path params by GET method
router.get("/:urlCode" , getUrl)

//Exporting route file
module.exports = router;
