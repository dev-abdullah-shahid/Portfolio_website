const Education = require('../models/Education');

exports.getAllEducation = async (req, res) => {
  const data = await Education.find();
  res.json(data);
};

exports.getEducationById = async (req, res) => {
  const item = await Education.findById(req.params.id);
  res.json(item);
};

exports.createEducation = async (req, res) => {
  const item = new Education(req.body);
  await item.save();
  res.status(201).json(item);
};

exports.updateEducation = async (req, res) => {
  const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
