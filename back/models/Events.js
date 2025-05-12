const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  expiresAt: Date,
  completed: { type: Boolean, default: false },
  type: { type: String, enum: ['recordatorio', 'examen', 'tarea', 'otro'], default: 'otro' }
});

module.exports = mongoose.model('Event', eventSchema);
