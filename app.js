var http = require('http');
var url = require('url');

const { Client } = require('pg')
const client = new Client()

await client.connect()

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()

http.createServer(function (req, res) {
    res.write("Hello World");
    res.end();
}).listen(8080);