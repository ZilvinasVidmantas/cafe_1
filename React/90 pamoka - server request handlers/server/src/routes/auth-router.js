import express from 'express';
import database from '../database/index.js';

// Sukuriamas routeris - objektas gebantis vykdyti užklausų funkcijas, pagal HTTP type
const router = express.Router();

// POST - /api/auth/register
router.post('/register', (req, res) => {
  // Siunčiamas atsakymas su statusu 200 ir json'u suformuota informacija
  res.status(200).json(
    database.data
  );
});

// POST - /api/auth/login
router.post('/login', (req, res) => {
  // Siunčiamas atsakymas su statusu 200 ir json'u suformuota informacija
  res.status(200).json({
    user: {
      email: 'user1@gmail.com',
      name: 'Serbis',
      surname: 'Montis',
      role: 'USER'
    },
    token: 'asdasdasdsad',
  });
});

// GET - /api/auth/checkEmail
router.get('/checkEmail', (req, res) => {
  res.status(200).json({
    available: true
  });
})

// Išexportuojas router'is
export default router;

