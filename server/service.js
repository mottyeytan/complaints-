import { getComplaintsDal, createComplaintDal } from "./dal.js";


export const getComplaints = async () => {
  try {
    const complaints = await getComplaintsDal();
    if (!complaints) {
      throw new Error("No complaints found");
    }

    if (complaints.length === 0) {
      throw new Error("No complaints found");
    }

    return complaints;

  } catch (error) {
    console.error("Error getting complaints", error);
    throw error;
  }
};

export const createComplaint = async (complaintData) => {
  try {
    if (!complaintData) {
      throw new Error("No complaint data provided");
    }

    if (!complaintData.complaint || !complaintData.category) {
      throw new Error("Complaint and category are required");
    }

    const validCategories = ["Food", "Orders", "Equipment", "Other"];
    if (!validCategories.includes(complaintData.category)) {
      throw new Error("Category must be one of: Food, Orders, Equipment, Other");
    }

    if (complaintData.complaint.length < 3) {
      throw new Error("Complaint must be at least 3 characters long");
    }
    

    const complaint = await createComplaintDal(complaintData);
    return complaint;
  } catch (error) {
    console.error("Error creating complaint", error);
    throw error;
  }
};