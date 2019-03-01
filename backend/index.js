const express = require('express');
const { Pool, Client } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: '',
  database: 'Datenbank1',
  password: 'Start1234',
  port: 5432,
})

const client = new Client()

app.get('/quartal', (request, response) => {
  var quartalNum = request.query.quartalnum;
	pool.query('SELECT "VName","NName","TName","Datum" FROM "Persons","Tage" WHERE "Quartal" = '+ quartalNum +' AND "Persons"."PersonID" = "Tage"."PersonID";' , (err, res) => {
    console.log(res)
		var data = res.rows;
		data.forEach((element, index) => {
			element.Datum = (element.Datum.getDate() ) + "." + (element.Datum.getMonth() +1 ) + ".";
		})
		response.send(data);
		console.log("[LOG] sende Daten von der Datenbank an den Client");
	})
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log('server is listening on ' + port);
});