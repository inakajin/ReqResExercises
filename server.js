'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

// your code here. 
function madLib(req, res, next) {
  //req.query
  //console.log(req.query.adjective1);
  var sentence = `There's a ${req.query.adjective1} new ${req.query.name} 
in ${req.query.place} and everyone's talking. 
Stunningly ${req.query.adjective2} and ${req.query.adverb} 
${req.query.adjective3}, all the cool kids know it. 
However, ${req.query.name} has a secret - 
${req.query.name}'s a vile vampire.

Will it end with a bite, or with a stake through the ${req.query.noun}?`
  
  res.set('Content-Type', 'text/html');
  res.send(sentence);
  res.status(200).end();

  
  console.log(sentence);
  
  next();
}

app.use(madLib);

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
