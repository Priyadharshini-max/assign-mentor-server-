const { config } = require("dotenv");
const express = require("express");
const app = express();

config();

const cors = require("cors");
const mongo = require("./Models/mongo");
const mentorRoute = require("./Routes/createMentor.route");
const studentRoute = require("./Routes/createStudent.route");
const assignmentorRoute = require("./Routes/assignMentor.route");
const assignOnementorRoute = require("./Routes/assignOnementor.route");
const displaydetailsRoute = require("./Routes/displayDetails.route");

app.listen(process.env.PORT, () => {
    console.log(`Connected to ${process.env.PORT} port`);
});

async function loadApp() {
    try {
        await mongo.connect();
        app.use(cors());
        app.use(express.json());
        app.use("/", mentorRoute);
        app.use("/", studentRoute);
        app.use("/", assignmentorRoute);
        app.use("/", assignOnementorRoute);
        app.use("/", displaydetailsRoute);
    } catch (err) {
        console.error(err);
        process.exit();
    }
}

loadApp();