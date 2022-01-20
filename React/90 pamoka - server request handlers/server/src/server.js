import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import authRouter from './routes/auth-router';
import cors from 'cors';

config();

const server = express();
const {
  SERVER_PORT,
} = process.env;

// Middlewares
server.use(morgan('tiny'));
server.use(cors());
server.use(express.json());

// Response handlers
server.use('/api/auth', authRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant http://localhost:${SERVER_PORT}/`);
});
