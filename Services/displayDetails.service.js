const mongo = require("../Models/mongo");
const { ObjectId } = require("mongodb");

const service = {
    async displayDetails(req, res) {
        const mentor = await mongo.db.collection("student").find({mentorId : { $ne: 0 }}, {
            projection: {
                _id: 0,
                studentname:1,
                mentorId:1
            }
        }).toArray();
        console.log(JSON.stringify(mentor));
        res.send(mentor);

        
    }
}

module.exports = service;