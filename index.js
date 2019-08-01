const express = require ('express');
const app = express ();

const csvFilePath='./asd.csv'
const csv=require('csvtojson');


app.get ('/', async (req, res) => {
  const result = await csv().fromFile(csvFilePath);
  res.send (result);
});

app.listen (3000, () => {
  console.log (`Server started on 3000`);
});
