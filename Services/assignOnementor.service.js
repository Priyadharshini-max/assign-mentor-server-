const mongo = require("../Models/mongo");
const { ObjectId } = require("mongodb");

const service = {
    async assignOnementor(req, res) {
        let data = req.body;
        try {
            await mongo.db.collection("student").updateOne({ _id: ObjectId(data.studentid) },
                { $set: { mentorId: data.mentorid } }, { multi: true }, { upsert: true })
            res.send({ message: "Assigned Successfully" });
        } catch (error) {
            console.log(error);
        }
    },
    async getallStudents(req, res) {
        const allStudents = await mongo.db.collection("student").find({}, {
            projection: {
                _id: 1,
                studentname: 1
            }
        }).toArray();
        res.send(allStudents);
    }
}

module.exports = service;