import mongoose from "mongoose";

const metaDataSchema = new mongoose.Schema(
  {
    ref_class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    ref_student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    name: { type: String, required: true },
    minioPath: { type: String, required: true },
  },
  { timestamps: true }
);

const MetaData = mongoose.model("MetaData", metaDataSchema);

export default MetaData;
