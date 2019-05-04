const db = require('./db');

module.exports = {
	
	getHome : ( req, res ) => {
		const queryString = "SELECT * FROM users";

		db.pool.query(queryString, (err, result) => {
	    	if (err) {
	    	console.error('List product Query error:', err.stack);
	   		}
	   		 console.log(result.rows);
	    	res.render('login', {var1 : 'var1TEXT'})
	    	// res.render('products/listAll', {product : result.rows});
				// res.send('Hello world!');
		});	
	},

	getSignup : (req, res) => {
		res.render('signup');
	},

	postSignup : (req, res) => {
		console.log(req);
		console.log(res);
	}
}