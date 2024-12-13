const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware for serving static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact',(req,res) => {
    res.render('contact');
})

app.get('/features', (req, res) => {
    res.render('features');
});

app.get('/team', (req, res) => {
    res.render('team');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});