import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
app.use(cors());
app.use(express.json());


app.use("/auth", authRoutes)
app.use("/user", userRoutes)

const PORT = process.env.APP_PORT

app.listen(PORT, () => {
  console.log(`Api Gateway is running in port ${PORT}`)
})