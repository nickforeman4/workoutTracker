var express = require("express");
var port = 3000;
var app = express();
var mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }
    app.use(express.json)))
app.use(express.static(public))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});