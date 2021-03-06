require('dotenv').config()

const express = require('express');
//const axios = require('axios');

const app = express();
const cors = require('cors')
const port = 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const connection = require('./database');

app.use(cors({ origin: 'http://35.233.223.4', credentials: true }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://35.233.223.4');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.post('/students/signup',(req, res, next) => {
  console.log(req.body)
  const Student_ID= req.body.Student_ID;
  const Firstname= req.body.Firstname;
  const Lastname= req.body.Lastname;
  const Email= req.body.Email;
  const Address= req.body.Address;
  const GPA= req.body.GPA;
  
  connection.query(
    'INSERT INTO students (Student_ID, Firstname, Lastname,Email, Address, GPA) VALUES (?,?,?,?,?,?)',
 [Student_ID, Firstname, Lastname, Email, Address, GPA],
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    
      
    }
 );
});

app.post('/api/all/',(req, res, next) => {
  console.log(req.body)
  const data = req.body.searchValue;
  
  connection.query(
    `SELECT * FROM students WHERE (Student_ID LIKE '%${data}%' OR Firstname LIKE '%${data}%' OR Lastname LIKE '%${data}%')`,
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    
      
    }
 );
});

app.post('/signup', (req,res)=>{

  const Student_ID= parseInt(req.body.Student_ID);
  const Firstname= req.body.Firstname;
  const Lastname= req.body.Lastname;
  const Email= req.body.Email;
  const Address= req.body.Address;
  const GPA= req.body.GPA;


  connection.query('INSERT INTO students (Student_ID, Firstname, Lastname,Email, Address, GPA) VALUES (?,?,?,?,?,?)',
   [Student_ID, Firstname, Lastname, Email, Address, GPA], (err, results) =>{
      if (err) {
      res.writeHead(500, {
        'Content-Type': 'text/plain'
      });
      res.end("Error in Data");
    }
    else {
   console.log(results)
    }

  });
});


app.post('/getall', (req,res)=>{
  connection.query('SELECT * FROM students ', (err, results) =>{
      if (err) {
      res.writeHead(500, {
        'Content-Type': 'text/plain'
      });
      res.end("Error in Data");
    }
    else {
   console.log(results)
    }

  });
});
app.get('/students/all',(req, res, next) => {
    connection.query(
      "SELECT * FROM students",
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
        
      }
    );
  });

  app.get('/api/users', (req, res) => {
    pool.query(`select * from ${students}`, (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });
app.get('/status', (req, res) => res.send('Working!'));

app.get('/', (req, res) => {
    res.send('Hello from express!');
});


app.listen(port, () => console.log(`App is listening on port ${port}`));
