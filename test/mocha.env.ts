import dotenv from 'dotenv';

dotenv.config({
  path: './.env.development',
});

process.on('uncaughtException', (err: Error) => {
  console.error('uncaughtException', err);
  process.exit(1);
});
