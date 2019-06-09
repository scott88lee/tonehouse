const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
//Body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//CORS
app.use(cors());
//app.use(cors({origin:'http://booking.tonehouse.sg'}));

const config = {
  user: 'postgres',
  password: 'T0nehouse',
  host: 'booking.cnwibdw0nva7.ap-southeast-1.rds.amazonaws.com',
  database: 'bookingengine',
  port: 5432
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

app.get('*', (req, res) => {
	const queryString = "SELECT * FROM users";
	pool.query(queryString, (err, result) => {
    	if (err) {
    		console.error('Query error:', err.stack);
   		}
   		
    	res.send(result.rows);
	});
})

app.post('/signup', (req, res) => {
	console.log(req.body);
	res.send({msg:"OK"});
})

app.listen(3000, () => console.log('Listen port: 3000'));