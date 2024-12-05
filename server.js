const express = require("express")
const path = require('path')

const app = express();

//  1. Basic Server Setup
app.get('/', (req, res) => {
    res.send('Welcome to Express');
});


// 2. Create Basic Routes
app.get('/about', (req, res) => {
    res.send('About my tech journey');
});


// 3. Handle GET Requests with
app.get('/greet/:name', (req, res) => {
    const name  = req.params.name;
    res.send(`Hello,  ${name}`);
});


// 4. Create Simple JSON API
let users = [
    {id: 1, name: 'user 1'},
    {id: 2, name: ' user 2'},
];

app.get('/api/users', (req, res) => {
    res.json(users);
});


// 5. Basic Error Handling
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found')}
)


app.listen(3000, () => console.log(`server is running on port 3000`))