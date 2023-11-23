import dotenv from 'dotenv';
import 'dotenv/config'
import express from 'express'
import { router } from './routers/router'
dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/',router)

// error handling
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send({ error: err.toString() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('Server is running',port);}); 