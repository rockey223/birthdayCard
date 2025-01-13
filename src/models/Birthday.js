import mongoose from "mongoose";

const birthdaySchema = new mongoose.Schema({
  birthdayId: { type: String, unique: true },
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Birthday =
  mongoose.models.Birthday || mongoose.model("Birthday", birthdaySchema);

export default Birthday;
