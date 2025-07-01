import express from 'express';
import router from './routes/index.js';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`🚀 Backend server running on http://localhost:${port}`);
});