const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: "Home", message: "Welcome to My Portfolio!" });
});

app.get('/homepage', (req, res) => {
    res.render('homepage', { title: "Home" });
  });

  
app.get('/about', (req, res) => {
  res.render('about', { title: "About Me", message: "About Me Page" });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: "Contact Me" });
});

app.get('/project', (req, res) => {
  res.render('project', { title: "Projects" });
});

app.get('/hobbies', (req, res) => {
  res.render('hobbies', { title: "Hobbies" });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  res.send(`Thank you, ${name}! We have received your message.`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
