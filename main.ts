import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  console.log(req.url);

  res.status(200).json({ status: 'success', message: 'Hello' });
});

app.listen(6001, () => {
  console.log('listening on port 6001');
});
