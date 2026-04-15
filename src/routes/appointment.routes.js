import express from "express";
import protect from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";
import {
  bookAppointment,
  getDoctorQueue
} from "../controllers/appointment.controller.js";

const router = express.Router();

router.post("/", protect, bookAppointment);

router.get(
  "/doctor/queue",
  protect,
  authorizeRoles("doctor"),
  getDoctorQueue
);

export default router;

import { completeAppointment } from "../controllers/appointment.controller.js";

router.put(
  "/:id/complete",
  protect,
  authorizeRoles("doctor"),
  completeAppointment
);
