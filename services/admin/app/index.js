import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";
import subjectRoutes from "./routes/subject.route.js";
import classRoutes from "./routes/class.route.js";
import connMongo from "./db/connMongo.js";


if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

app.use(express.json());
app.use(cors());

app.use("/admin/user", userRoutes);
app.use("/admin/suject", subjectRoutes);
app.use("/admin/class", classRoutes);

const PORT = process.env.APP_PORT;

connMongo();

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
