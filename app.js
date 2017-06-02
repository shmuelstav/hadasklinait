var express = require('express')
var app = express()
app.use(express.static(__dirname + "/public"))
app.set ("view engine" , "ejs");

var mail = require ('./mail/mail.js');

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('main')
})

app.get('/mobile', function (req, res) {
    console.log("mobile connect");
    res.render('mainmobile')
})

app.post('/mail', function (req, res) {
    mail.send_mail(req.body);
    res.status(200);
    res.json({success : "Updated Successfully", status : 201});
    res.send();
})


app.listen(8080, function () {
    console.log('Example app listening on port 3000!')
})