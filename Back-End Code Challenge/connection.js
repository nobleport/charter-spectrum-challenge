const {Client, Pool} = require('pg');
const showsArray = require('./shows.json');
const packagesArray = require('./packages.json');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'rootUser',
    database: 'postgres'
}
)

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testbb',
    password: 'demopassword',
    port: 5432
})

pool.query("DROP TABLE shows", (err, res)=>{
    console.log(err, res, "line 23")
    pool.end(()=>{})
})

pool.query("DROP TABLE packages", (err, res)=>{
    console.log(err, res, 'line 28')
    pool.end(()=>{})
})

pool.query("CREATE TABLE shows (id INT, title VARCHAR(20), network VARCHAR(20), imdbRating NUMBERIC(3, 1))", (err, res) => {
    console.log(err, res, 'line 33')
    pool.end(()=>{})
})

pool.query("CREATE TABLE packages (id INT, name VARCHAR(20), networks text[])", (err, res)=> {
    console.log(err, res, 'line 38')
    pool.end(()=>{})
})

console.log(showsArray, 'shows array');

