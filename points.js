var mysql = require('mysql');
var moment = require('moment');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "beer_db"
})

connection.connect(function(err) {
    if (err) throw err;
    addSumPoints();
})


function addSumPoints(){
	for (var i = 1; i <49; i++) {
		connection.query('SELECT * FROM beer Where id=' + i+';', function(err, res) {
		    if (err) throw err;
		    //console.log(res[0]);
		    //add point algorithm
		    var addPoints=0;
		    addPoints=Math.floor(Math.random()*6+1);
		    if(res[0].organic===1){
		    	addPoints+=4;
		    }
		    if(res[0].origin_id%12===moment().month()){
		    	addPoints*=3;
		    }
			console.log(res[0].id);
		     connection.query("UPDATE beer SET points= "+addPoints+" WHERE id ="+res[0].id+";", function(err, res) {
		     	if (err) throw err;
		     		console.log(res); 
		    });
			
		})
	}	
}