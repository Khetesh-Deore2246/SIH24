const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// Route to generate and save a tour schedule
router.post('/generate-schedule', async (req, res) => {
  const { duration, freeTimeSlots, startDate, interests, groupType, budget } = req.body;

  // Dummy schedule generation logic (replace with real logic)
  const schedule = {};
  for (let i = 1; i <= duration; i++) {
    schedule[`Day ${i}`] = {
      activity: `${interests[0]} activity`,
      timeSlot: freeTimeSlots.includes("Morning") ? "Morning" : "Afternoon"
    };
  }

  // Save tour data to MongoDB
  try {
    const newTour = new Tour({ duration, freeTimeSlots, startDate, interests, groupType, budget, schedule });
    await newTour.save();
    res.status(201).json(newTour);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save tour data.' });
  }
});

module.exports = router;
