const express = require('express'),
	  app 	  = express(),
	  path = require('path'),
	  publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 5000;

app.use(express.static(publicPath));
app.set("view engine", "hbs");

//ROUTES

//GET index
app.get('/about', (req, res) => {
	res.render('publicPath/index');
});

//SERVER
app.listen(port, () => {
	console.log(`CHAT running on poty: ${port}`);
});
