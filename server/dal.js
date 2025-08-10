import Complaint from "./complaints.model.js";


export const getComplaintsDal = async () => {
  try {
    const complaints = await Complaint.find({});
    return complaints;
  } catch (error) {
    console.error("Error getting complaints", error);
    throw error;
  }
};

export const createComplaintDal = async (complaintData) => {
  try {
    const newComplaint = new Complaint(complaintData);

    await newComplaint.save();
    return newComplaint;
  } catch (error) {
    console.error("Error creating complaint", error);
    throw error;
  }
};










