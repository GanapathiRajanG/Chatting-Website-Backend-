const AutoParts = require('../Models/autopartsModel');

exports.getAllAutoParts = async (req, res) => {
  try {
    const parts = await AutoParts.find();
    res.status(200).json({
      status: 'success',
      results: parts.length,
      data: { parts }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.createAutoPart = async (req, res) => {
  try {
    const newPart = await AutoParts.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { part: newPart }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.getAutoPart = async (req, res) => {
  try {
    const part = await AutoParts.findById(req.params.id);
    if (!part) {
      return res.status(404).json({
        status: 'fail',
        message: 'No part found with that ID'
      });
    }
    res.status(200).json({
      status: 'success',
      data: { part }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.updateAutoPart = async (req, res) => {
  try {
    const part = await AutoParts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!part) {
      return res.status(404).json({
        status: 'fail',
        message: 'No part found with that ID'
      });
    }
    res.status(200).json({
      status: 'success',
      data: { part }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.deleteAutoPart = async (req, res) => {
  try {
    const part = await AutoParts.findByIdAndDelete(req.params.id);
    if (!part) {
      return res.status(404).json({
        status: 'fail',
        message: 'No part found with that ID'
      });
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};