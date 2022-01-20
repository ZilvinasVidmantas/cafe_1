import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import authRouter from './routes/auth-router';
import cors from 'cors';

// Užkrauna duomenis iš .env failo
config();
// Sukuria serverio objektą, kuris galės atsakyti į užklausas
const server = express();
// iš vykstančios programos aplinkos pasiemame kintamį, kuris buvo aprašytas .env faile
const { SERVER_PORT } = process.env;

// Middlewares
// Darant užklausas į serverį atspausdina minimalią informacija paleisto serverio konsolėje
server.use(morgan('tiny'));
// Leidžia vykdyti užklausas iš visų puslapių
server.use(cors());
// Gavus JSON tipo duomenis, įdeda į request handlerio už-klausos parametrą -> req.body
server.use(express.json());

// Response handlers
// Visas užklasas kurios prasideda  adresu '/api/auth' serveris nukreips į authRouter
server.use('/api/auth', authRouter);

// Serveriui perduodamos užklausos, kurios bus gautos į šio kompiuterio 5000'inį port'ą
server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant http://localhost:${SERVER_PORT}/`);
});


/*
  * Parsisiųskite https://www.postman.com/ - 10
  * Perskaitykite server.js ir auth-router.js failus - 5
  * Trumpai perskaitykite bibliotekų aprašymus kurios yra naudojamos - npmjs.com - 10
  * Įsijungę Postman programą padarykite užklausas adresais: - 5
    * /api/auth/register
    * /api/auth/login
  * Suformuokite dirbtinius JSON duomenis, kokius manote, kad turėtų grąžinti adresai: - 5
    * /api/auth/register
    * /api/auth/login
  * Sukurkite GET tipo užklausos aptarnavimą adresu '/api/auth/checkEmail' - 5
    * grąžinkite JSON duomenis: { available: true|false } 
*/

// 19:00 - 19:10 Pertauka
// 19:25, tęsime toliau kartu