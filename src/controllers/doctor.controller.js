import Doctor from "../models/Doctor.model.js";
import User from "../models/User.model.js";

export const createDoctor = async (req, res) => {
  try {
    const {
      userId,
      name,
      email,
      department,
      availableSlots,
      consultationFee
    } = req.body;

    if (!userId || !name || !email ||!department) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findById(userId);
    if (!user || user.role !== "doctor") {
      return res.status(400).json({ message: "Invalid doctor user" });
    }

    const existingDoctor = await Doctor.findOne({ user: userId });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor profile already exists" });
    }

    const doctor = await Doctor.create({
      user: userId,
      name,
      email,
      department,
      availableSlots,
      consultationFee
    });

    res.status(201).json({
      success: true,
      doctor
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().select(
      "name email department availableSlots consultationFee"
    );

    res.json({
      success: true,
      count: doctors.length,
      doctors
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
