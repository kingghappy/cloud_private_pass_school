import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  ref_class: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
  ref_score: { type: mongoose.Schema.Types.ObjectId, ref: "Score" },
  isActive: { type: Boolean, default: true, required: true },
  email: { type: String, unique: true, required: true },
  ref_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  ref_submit: [{ type: mongoose.Schema.Types.ObjectId, ref: "MetaData" }],
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
