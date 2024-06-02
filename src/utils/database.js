const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    dob TEXT,
    contact TEXT,
    email TEXT,
    description TEXT
  )`);
});

module.exports = db;
