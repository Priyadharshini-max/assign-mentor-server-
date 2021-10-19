const mongo = require("../Models/mongo");
const { ObjectId } = require("mongodb");

const service = {
    assignmentor(req, res) {
        let data = req.body;
        console.log(data);

        data.studentid.forEach(async function (element) {
            try {
                await mongo.db.collection("student").updateOne({ _id: ObjectId(element) },
                    { $set: { mentorId: data.mentorid } }, { multi: true }, { upsert: true })
            } catch (error) {
                res.status(500).send({ error: "Internal server error" });
            }

        });
        res.send({ message: "Assigned Successfully" });
    }
}

module.exports = service;