const db = require('./database');

app.post('/users', (req, res) => {
  const { name, dob, contact, email, description } = req.body;
  db.run(`INSERT INTO users (name, dob, contact, email, description) VALUES (?, ?, ?, ?, ?)`,
    [name, dob, contact, email, description], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

app.get('/users', (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  db.all(`SELECT * FROM users LIMIT ? OFFSET ?`, [limit, offset], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, dob, contact, email, description } = req.body;
  db.run(`UPDATE users SET name = ?, dob = ?, contact = ?, email = ?, description = ? WHERE id = ?`,
    [name, dob, contact, email, description, id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ changes: this.changes });
  });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM users WHERE id = ?`, [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ changes: this.changes });
  });
});
