import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { resolve } from 'path';

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(
    helmet({
        crossOriginResourcePolicy: {
            policy: 'cross-origin',
        },
    }),
);
server.use(express.static('public'));
server.use('/public', express.static(resolve(__dirname, '..', 'public')));

server.listen(process.env.PORT, () => {
  console.log();
  console.log(`\tRunning on ${process.env.URL}:${process.env.PORT}`);
});