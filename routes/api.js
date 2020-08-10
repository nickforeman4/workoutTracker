const router = require("express").Router();
const Workouts = require("../models/Workouts.js");

router.post("/api/Workouts", ({ body }, res) => {
    Workouts.create(body)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ body }, res) => {
    Workouts.findByIdAndUpdate(params.id, {
        $push:{exercises: body}
    },{new: true})
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workouts.find({})
        .then(dbWorkouts => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
