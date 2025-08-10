import express from "express";
import { getComplaintsController, createComplaintController } from "./controllers.js";

const router = express.Router();

router.post("/complaints", createComplaintController);
router.get("/complaints/admin", async (req, res) => {
    const password = req.query.password;
    if (password === process.env.ADMIN_PASSWORD) {
        await getComplaintsController(req, res);
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
});

export default router;