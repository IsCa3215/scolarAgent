const Event = require('../models/Events');
const User = require('../models/User');
exports.fetchEvents = async (req, res) => {
  const { userId } = req.query;
  console.log('Fetch events request:', req.query);

  try {
    const event = await Event.find({ userId });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: 'Error del servidor' });
  }
}
