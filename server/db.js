const pg = require('pg');

const awsRDS = {
  user: 'master',
  password: 'tonehouse123',
  host: 'bookingengine.cnwibdw0nva7.ap-southeast-1.rds.amazonaws.com',
  database: 'booking', //Linode config
  port: 5432
};

const pool = new pg.Pool(awsRDS);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = {
	pool : pool
}