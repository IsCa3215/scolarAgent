const Event = require('../models/Events');

exports.fetchEvents = async (req, res) => {
    console.log('Fetch events request:', req.body);
  const { userId } = req.body;

  try {
    const events = await Event.find({ userId });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: 'Error del servidor' });
  }
}
