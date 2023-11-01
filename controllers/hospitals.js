import HospitalModel from "../models/hospitals.js";

export const createHospital = async (req, res) => {
  try {
    const { name, workHour, mobile, address } = req.body;
    const hospital = new HospitalModel({
      workHour,
      name,
      mobile,
      address,
    });
    const savedHospital = await hospital.save();
    res.status(200).json(savedHospital);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await HospitalModel.find();
    res.status(200).json(hospitals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
