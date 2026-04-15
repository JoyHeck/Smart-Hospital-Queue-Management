import express from "express";
import protect from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";
import {
  createDoctor,
  getAllDoctors
} from "../controllers/doctor.controller.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  createDoctor
);

router.get("/", getAllDoctors);

export default router;
