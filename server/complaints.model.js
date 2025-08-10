import mongoose from "mongoose";

export const complaintSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  complaint: String,
  category: { type: String, enum: ["Food", "Equipment", "Orders", "Other"], default: "Other" }
});

const Complaint = mongoose.model("Complaint", complaintSchema, "complaints");

export default Complaint;