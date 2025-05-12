const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  day: { type: String, enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'], required: true },
  subject: { type: String, required: true },
  startTime: { type: String, required: true }, 
  endTime: { type: String, required: true },
  location: String
});

module.exports = mongoose.model('Schedule', scheduleSchema);
