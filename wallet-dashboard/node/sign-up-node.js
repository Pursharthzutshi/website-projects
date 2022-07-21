const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parser");
const { json } = require("express/lib/response");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "../views"))
app.set("view engine", "ejs");


app.get("/sign-up", (req, res) => {
    res.render("sign-up", {
        logInMessage: "",
        SignUpErrorMessage: "",
    });
})


app.get("/home", (req, res) => {
    res.render("home");
})

app.use(express.static("public"));
app.use("images", express.static(__dirname));
app.use("css", express.static(__dirname));


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

//Now creating a table inside the database people_accounts

app.get("/Sign-up", (req, res) => {
    const sql = `create table sign_up(id INT NOT NULL auto_increment,username Varchar(50),email_id varchar(50),password varchar(50),re_check_password varchar(50),gender varchar(1),address varchar(100),age int,Primary key(id))`;

    db.query(sql, (err) => {
        console.log(err);
    })
    res.send("Table is created");
})

//Drop table if error occurs

app.get("/dropTable", (req, res) => {
    const sql = `drop table sign_up`
    db.query(sql, (err) => {
        console.log(err);
    })

    res.send("Table is deleted")
})

//Now inserting the values inside the table with the help of POST method

app.post("/home", (req, res) => {

    var username = req.body.username;
    var email_id = req.body.emailId;
    var password = req.body.password;
    var re_check_password = req.body.reCheckPassword;
    var gender = req.body.gender;
    var address = req.body.address;
    var age = req.body.age;

    var allInputValues = [username, email_id, password, re_check_password, gender, address, age]

    const sql = `insert into sign_up(username,email_id,password,re_check_password,gender,address,age) Values ("${username}","${email_id}","${password}","${re_check_password}","${gender}","${address}","${age}")`

    const emailsql = `select * from sign_up where email_id =?`

    db.query(emailsql, [email_id], (err, EmailMatchresults) => {
        console.log(err);

        //Authentication of the sign up form

        if (EmailMatchresults.length > 0) {
            res.render("sign-up", {
                SignUpErrorMessage: "Email Taken"
            });
        } else if (password.length !== re_check_password.length) {
            res.render("sign-up", {
                SignUpErrorMessage: "Password Not Matching"
            });
        } else if (allInputValues[0].length == "" || allInputValues[1].length == "") {
            res.render("sign-up", {
                SignUpErrorMessage: "Please Fill the Sign Up Form"
            })
        } else if (password.length < 5 || re_check_password.length > 30) {
            res.render("sign-up", {
                SignUpErrorMessage: "Password should between 5 and 30"
            });
        } else if (!gender) {
            res.render("sign-up", {
                SignUpErrorMessage: "Please select your gender"
            });
        } else {
            db.query(sql, [allInputValues], (err, results) => {
                console.log(err)
                console.log(results)
            })
            res.render("home", {
                logInMessage: "Welcome " + username,
                logInPage: "Log In",
            })
        }
    })
})


app.listen(port, () => {
    console.log(`${port} is running`)
})