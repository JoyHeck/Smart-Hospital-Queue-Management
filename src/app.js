import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import protect from "./middlewares/auth.middleware.js";
import doctorRoutes from "./routes/doctor.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Smart Hospital Backend is running" });
});

app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Access granted",
    user: req.user
  });
});

app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);


export default app;
