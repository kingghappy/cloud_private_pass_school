import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  name: { type: String, require: true },
  ref_subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
  ref_teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
  ref_students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  }]
});

const ClassRoom = mongoose.model("ClassRoom", classSchema)

export default ClassRoom
