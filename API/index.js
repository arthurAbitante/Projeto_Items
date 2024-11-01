const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'items'
});

db.connect(err => {
    if(err){
        console.error('Error connecting to the database', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.use(cors());

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('API is running.');
});

app.post('/api/items', (req, res) => {
    const {id, nome, descricao} = req.body;

    const sql = 'INSERT INTO items ( nome, descricao) VALUES ( ?, ?)';

    db.query(sql, [ nome, descricao], (err, result) => {
        if(err){
            console.error('Error inserting data:', err);
            res.status(500).send('Error saving shape data.');
        }else{
            res.send({ id: result.insertId, nome, descricao });
        }
    });
});

app.get('/api/items', (req, res) => {
    const sql =  'SELECT * FROM items';
    db.query(sql, (err, results) => {
        if(err){
            console.error('Error fetching shapes:', err);
            res.status(500).send('Error fetching shapes.');
        }else{
            res.json(results);
        }
    });
});

app.put('/api/items/:id', (req, res) => {
    const {id} = req.params;
    const {nome, descricao} = req.body;
    const sql = 'UPDATE items SET nome = ?, descricao = ? WHERE id = ?';
    db.query(sql, [nome, descricao, id], (err, result) => {
        if(err){
            console.error('Error updating shape:', err);
            res.status(500).send('Error updating shape.');
        }else if(result.affectedRows === 0){
            res.status(404).send('Shape not found.');
        }else{
            res.send('Shape updated successfully.');
        }
    });
});

app.delete('/api/items/:id', (req, res) => { 
    const { id } = req.params;
    const sql = 'DELETE FROM items WHERE id = ?';
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting shape:', err);
            res.status(500).json({ error: 'Error deleting shape.' }); // Send JSON for error
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Shape not found.' }); // Send JSON for "not found"
        } else {
            res.json({ message: 'Shape deleted successfully' }); // Send JSON for success
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);
});

