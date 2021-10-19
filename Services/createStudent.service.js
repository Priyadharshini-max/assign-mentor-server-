const mongo = require("../Models/mongo");
const schema = require("../Models/Schema");

const service = {
    async createstudent(req, res) {
        let data = req.body;
        const { error } = await schema.student.validate(data);

        if (error) return res.status(400).send({ error: error.details[0].message });

        const user = await service.findEmail(data.studentmailid);
        if (user) return res.status(400).send({ error: "Student already registered" });

        const mailid = data.studentmailid;
        await mongo.db.collection("student").insertOne(data);

        await mongo.db.collection("student").findOneAndUpdate({ studentmailid: mailid }, { $set: { mentorId: 0 } });
        res.send({ message: "Student Successfully Created" });
    },

    async displayStudents(req, res) {
        const allStudents = await mongo.db.collection("student").find({ mentorId: 0 }, {
            projection: {
                _id: 1,
                studentname: 1
            }
        }).toArray();
        res.send(allStudents);
    },

    findEmail(studentmailid) {
        return mongo.db.collection("student").findOne({ studentmailid });
    }
}

module.exports = service;