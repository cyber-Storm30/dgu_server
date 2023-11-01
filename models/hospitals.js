import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    workHour: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hospitals", hospitalSchema);
