require('newrelic')
const express = require('express');
const CORS = require('cors');
const app  = express();
const path = require('path');
const request = require('request');


app.use(CORS());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
})



// // Eugenia's module: (3000)
// app.get('/restaurants/:id/photos', (req, res) => {
//   // extract the id with request.params.id
//   var id = req.params.id
//   res.redirect(`http://localhost:3000/api/restaurants/${id}/photos`);
// });

// My module: (port 3001)
app.get('/api/restaurants/:id/reviews', (req, res) => { //proxy server url
  var id = req.params.id
  // console.log(id)
  request(`http://54.153.13.94:3001/api/restaurants/${id}/reviews`, (err,results) => {
    if(err){
      res.send(err)
    }
  })
  .pipe(res) //original module url
});


// // Rafe's module: (port 3002)
// app.get('/restaurants/:id/info/', (req, res) => {
//   var id = req.params.i
//   res.redirect(`http://localhost:3002/api/restaurants/${id}/info`);
// });

// // Erik's module: (port 3003)
// app.get('/restaurants/:id/googlereviews/', (req, res) => {
//   var id = req.params.id
//   res.redirect(`http://localhost:3003/api/restaurants/${id}/googlereviews`);
// });

app.listen(4000, () => console.log('Listening on port 4000!'));



//do my module get request
//make sure endpoint is same as original modules server endpoint
//stress test