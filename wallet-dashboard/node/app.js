const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/home", (req, res) => {
    res.render("home");
})

app.get("/saved-cards", (req, res) => {
    res.render("saved-cards");
})

app.get("/support", (req, res) => {
    res.render("support");
})

app.get("/profile", (req, res) => {
    res.render("profile");
})

app.use(express.static("public"))


app.use("/css", express.static(__dirname))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3307,
    database: "people_accounts",
})

//connecting to a database

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("Connection Successful");
})

//creating database

app.get("/creatingPeopleAccountDatabase", (req, res) => {
    const sql = "create database people_accounts"
    db.query(sql, (err) => {
        console.log(err)
    })
    res.send("Database Created")
})

//creating table

app.get("/creatingPeopleAccountTable", (req, res) => {
    const sql = "create table save_cards_details(id int auto_increment,card_no bigint,name varchar(100),expiryDate INT ,cvv INT ,primary key (id))"
    db.query(sql, (err) => {
        console.log(err)
    })
    res.send("Table Created")
})

//drop table

app.get("/dropTable", (req, res) => {
    const sql = "drop table save_cards_details"
    db.query(sql, (err) => {
        console.log(err)
    })
    res.send("Table Deleted")

})

//alter table


app.get("/altertable", (req, res) => {
    const sql = "alter table save_cards_details modify expiryDate varchar(100)"
    db.query(sql, (err) => {
        console.log(err)
    })
    res.send("Alter Table")
})

//inserting values from form to sql

app.post("/", (req, res) => {

    var cardNo = req.body.cardNo;
    var cardNameHolder = req.body.cardNameHolder;
    var cardExpiryDate = req.body.cardExpiryDate;
    var cardCvv = req.body.cardCvv;

    var allInputValues = [cardNo, cardNameHolder, cardExpiryDate, cardCvv]

    const sql = `insert into save_cards_details(card_no,name,expiryDate,cvv) VALUES ("${cardNo}","${cardNameHolder}","${cardExpiryDate}","${cardCvv}")`;

    console.log(cardNo);
    console.log(cardNameHolder);
    console.log(cardExpiryDate);
    console.log(cardCvv);

    if (allInputValues[0].length == "" || allInputValues[1].length == "") {
        res.end("Please fill the Form");
    } else if (cardCvv.length > 0 && cardCvv.length < 3) {
        res.end("Invalid cvv");
    } else {
        db.query(sql, (err) => {
            if (err) throw err;
            console.log(err);
            res.status(204).end("Data send");
        })

    }

});



app.listen({ port }, () => {
    console.log(`${port} is running`);
})