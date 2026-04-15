import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true
    },
    date: {
      type: String, // YYYY-MM-DD
      required: true
    },
    timeSlot: {
      type: String,
      required: true
    },
    queueNumber: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["booked", "completed", "cancelled"],
      default: "booked"
    }
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;

