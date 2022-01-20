import express from 'express';

// Sukuriamas routeris - objektas gebantis vykdyti užklausų funkcijas, pagal HTTP type
const router = express.Router();

// POST - /api/auth/register
router.post('/register', (req, res) => {
  // Siunčiamas atsakymas su statusu 200 ir json'u suformuota informacija
  res.status(200).json({
    message: 'resgiter'
  })
});

// POST - /api/auth/login
router.post('/login', (req, res) => {
  // Siunčiamas atsakymas su statusu 200 ir json'u suformuota informacija
  res.status(200).json({
    message: 'login'
  })
});

router.get('?????', (req, res) => {
  // išsiųskite sėkmingą atsakymą su duomenimis: { available: true }
})

// Išexportuojas router'is
export default router;

