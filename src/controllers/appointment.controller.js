import Appointment from "../models/Appointment.model.js";
import Doctor from "../models/Doctor.model.js";


export const bookAppointment = async (req, res) => {
  try {
    const { doctorId, date, timeSlot } = req.body;

    if (!doctorId || !date || !timeSlot) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Count existing appointments for same doctor & date
    const count = await Appointment.countDocuments({
      doctor: doctorId,
      date,
      status: "booked"
    });

    const appointment = await Appointment.create({
      patient: req.user._id,
      doctor: doctorId,
      date,
      timeSlot,
      queueNumber: count + 1
    });

    res.status(201).json({
      success: true,
      appointment
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDoctorQueue = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    // 1. Find doctor record linked to this user
    const doctor = await Doctor.findOne({ user: req.user._id });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor profile not found" });
    }

    // 2. Use doctor._id (NOT user._id)
    const appointments = await Appointment.find({
      doctor: doctor._id,
      date: today,
      status: "booked"
    })
      .populate("patient", "name email")
      .sort({ queueNumber: 1 });

    res.json({
      success: true,
      count: appointments.length,
      appointments
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const completeAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    appointment.status = "completed";
    await appointment.save();

    res.json({
      success: true,
      message: "Appointment marked as completed"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

