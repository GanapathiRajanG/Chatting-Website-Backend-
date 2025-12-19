const Message = require('../Models/messageModel');

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });
    res.status(200).json({
      status: 'success',
      data: { messages }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.createMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const newMessage = await Message.create({
      sender: req.user._id,
      senderName: req.user.name,
      message
    });
    
    res.status(201).json({
      status: 'success',
      data: { message: newMessage }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};