import { getComplaints, createComplaint } from "./service.js";

export const getComplaintsController = async (req, res) => {
  try {
    const complaints = await getComplaints();
    if (!complaints) {
      throw new Error("No complaints found");
    }

    if (complaints.length === 0) {
      throw new Error("No complaints found");
    }

    res.status(200).json(complaints);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createComplaintController = async (req, res) => {
  try {
    const complaint = req.body;

    if (!complaint) {
      throw new Error("No complaint data provided");
    }

    const result = await createComplaint(complaint);
    if (!result) {
      throw new Error("Failed to create complaint");
    }

    res.status(201).json(result);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
