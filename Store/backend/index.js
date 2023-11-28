const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // ваше ім'я користувача MySQL
  password: '',  // ваш пароль MySQL
  database: 'storedb',  // ваша база даних
});

db.connect((err) => {
  if (err) {
    console.error('Помилка підключення до бази даних:', err);
  } else {
    console.log('Підключено до бази даних');
  }
});

app.get('/', (req, res) => {
  res.send('Сервер працює');
});

// Маршрут для отримання списку всіх покупців
app.get('/customers', (req, res) => {
  const sql = 'SELECT * FROM Customer';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Помилка при виконанні запиту до бази даних:', err);
      res.status(500).send('Помилка сервера');
    } else {
      res.json(result);
    }
  });
});

// Маршрут для створення нового покупця
app.post('/customers', (req, res) => {
  const { Name, Password, PhoneNo } = req.body;
  const sql = 'INSERT INTO Customer (Name, Password, PhoneNo) VALUES (?, ?, ?)';
  db.query(sql, [Name, Password, PhoneNo], (err, result) => {
    if (err) {
      console.error('Помилка при виконанні запиту до бази даних:', err);
      res.status(500).send('Помилка сервера');
    } else {
      res.status(201).send('Покупця додано успішно');
    }
  });
});

// Маршрут для отримання інформації про конкретного покупця за ID
app.get('/customers/:id', (req, res) => {
  const customerId = req.params.id;
  const sql = 'SELECT * FROM Customer WHERE ID = ?';
  db.query(sql, [customerId], (err, result) => {
    if (err) {
      console.error('Помилка при виконанні запиту до бази даних:', err);
      res.status(500).send('Помилка сервера');
    } else {
      if (result.length === 0) {
        res.status(404).send('Покупця не знайдено');
      } else {
        res.json(result[0]);
      }
    }
  });
});

// Маршрут для видалення покупця за ID
app.delete('/customers/:id', (req, res) => {
  const customerId = req.params.id;
  const sql = 'DELETE FROM Customer WHERE ID = ?';
  db.query(sql, [customerId], (err, result) => {
    if (err) {
      console.error('Помилка при виконанні запиту до бази даних:', err);
      res.status(500).send('Помилка сервера');
    } else {
      res.send('Покупця видалено успішно');
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер слухає на порті ${port}`);
});
