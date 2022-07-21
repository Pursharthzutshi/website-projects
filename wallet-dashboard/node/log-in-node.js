const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser")
const mysql = require("mysql")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use("css", express.static(__dirname));


app.get("/log-in", (req, res) => {
        res.render("log-in");
    })
    //connecting to database

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3307,
    database: "people_accounts"

})

db.connect((err) => {
    console.log(err);
})


//fetching data from sign-up table


app.post("/home", (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    const sql = `select * from sign_up where username = ? and password = ?`
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            res.render("home");
            console.log(results);
        }
        res.end();
    })

    console.log(app.post);

})

app.listen(port, () => {
    console.log(`${port} is running`);
})