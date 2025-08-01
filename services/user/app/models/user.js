import mongoose from "mongoose";
import { hashPassword } from "../utils/hashpassword.js";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "teacher", "student"], required: true },
  ref_profile: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "profileModel",
  },
  profileModel: {
    type: String,
    enum: ["Teacher", "Student"],
  },
  passChange: { type: Boolean, default: false },
});

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await hashPassword(this.password);
    }
    next();
  } catch (err) {
    next(err); // Chuyển lỗi đến middleware xử lý lỗi
  }
});

userSchema.pre("insertMany", async function (next, docs) {
  try {
    // Hash password cho từng document
    const hashedDocs = await Promise.all(
      docs.map(async (doc) => {
        if (doc.password) {
          doc.password = await hashPassword(doc.password);
        }
        return doc;
      })
    );

    // Gán lại docs đã được hash
    docs = hashedDocs;
    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model("User", userSchema);

export default User;
