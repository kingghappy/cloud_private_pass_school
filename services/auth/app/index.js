import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connMongo from './db/connMongo.js';
import authRoute from "./routes/auth.route.js"


if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoute)

const PORT = process.env.APP_PORT;

connMongo();

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
