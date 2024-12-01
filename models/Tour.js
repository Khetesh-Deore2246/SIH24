const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
  duration: Number,
  freeTimeSlots: [String],  // Example: ["Morning", "Afternoon"]
  startDate: Date,
  interests: [String],      // Example: ["Historical", "Shopping"]
  groupType: String,        // Example: "Solo", "Couple"
  budget: String,           // Example: "Economy", "Luxury"
  schedule: Object          // Generated schedule (flexible structure)
});

module.exports = mongoose.model('Tour', TourSchema);
