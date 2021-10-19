const mongo = require("../Models/mongo");
const schema = require("../Models/Schema");

const service = {
    async creatementor(req, res) {
        let data = req.body;
        const { error } = await schema.mentor.validate(data);
        if (error) return res.status(400).send({ error: error.details[0].message })

        const isExist = await service.findEmail(data.mentormailid);

        if (isExist) return res.status(400).send({ error: "Mentor already registered" });
        await mongo.db.collection("mentor").insertOne(data);
        res.send({ message: "Mentor Successfully Created" });
    },

    async displayMentors(req, res) {
        const Allmentor = await mongo.db.collection("mentor").find({}, {
            projection: {
                _id: 1,
                mentorname: 1
            }
        }).toArray();
        res.send(Allmentor);
    },

    findEmail(mentormailid) {
        return mongo.db.collection("mentor").findOne({ mentormailid });

    }
}

module.exports = service;