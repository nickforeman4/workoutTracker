const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    exercises: [
        {name: {
            type: String,
            trim: true,
            required: "Enter a name for Workouts"
        },
        type: {
            type: String,
            required: "Enter an amount"
        },
        distance: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        }],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;