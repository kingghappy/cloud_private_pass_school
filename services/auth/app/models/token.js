import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  ref_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  refreshToken: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: "7d" },
});

const Token = mongoose.model("Token", tokenSchema);

export default Token;
