const express = require('express');
const bcrypt = require('bcrypt');
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

app.post('/signup', (req, res)  => {
	let u = req.body;

	let sqlQuery = "SELECT * FROM users WHERE email = '" + u.email + "'";
	
  pool.query(sqlQuery, (err, result) => {
      if (err) console.log("Query error: " + err);
      
      if (result.rows.length === 0) {  // E-mail doesn't exist in DB

        bcrypt.hash(u.pass, 10, (err,hash) => {   // Hashes password

          // Stores into DB users
          let insertQuery = "INSERT INTO users(bandname, genre, email, bandmembers, contactperson, contactnumber, approval, pwdhash)VALUES('" + u.bandname + "', '" + u.genre + "', '" + u.email + "', " + u.bandmembers + ", '" + u.contactperson + "', '" + u.number + "', '" + u.approval + "', '" + hash + "');"
          pool.query(insertQuery, (err, result) => {  // STORE SIGNUP DATA
            if (err) console.log("Second Query Error: "+ err);

            console.log(`New user signed up ${u.email}.`);
            res.send({foo:'bar'});
          });
        });
		} else {  //END - FRESH EMAIL
			console.log("Email already in use.")
      res.send({errMsg:"E-mail is already in use."})
    } 
  }); // FIRST SQL QUERY 
});

app.listen(3000, () => console.log('Listen port: 3000'));