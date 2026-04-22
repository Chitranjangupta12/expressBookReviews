const axios = require("axios");

// Get all books
axios.get("http://localhost:3000/books")
  .then(res => console.log(res.data));

// Get by ISBN
axios.get("http://localhost:3000/books/isbn/1")
  .then(res => console.log(res.data));

// Get by Author
axios.get("http://localhost:3000/books/author/Chinua%20Achebe")
  .then(res => console.log(res.data));

// Get by Title
axios.get("http://localhost:3000/books/title/Things")
  .then(res => console.log(res.data)); 