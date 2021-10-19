const mongo = require("../Models/mongo");
const { ObjectId } = require("mongodb");

const service = {
    async displayDetails(req, res) {
        const mentor = await mongo.db.collection("student").find({}, {
            projection: {
                _id: 1
            }
        }).toArray();
        console.log(JSON.stringify(mentor));

        const details = await mongo.db.collection("student").aggregate([
            {
                $lookup:
                {
                    from: "mentor",
                    localField: "mentorId",
                    foreignField: "fakeid",
                    // JSON.stringify("_id")
                    as: "allDetails"
                }
            }
            ,
            {
                $project:
                {
                    _id: 0,
                    studentname: 1,
                    mentorname: 1
                }
            }
        ]).toArray()

        // const filteredData = await details.find({}, {
        //     projection: {
        //         _id: 0,
        //         studentname: 1,
        //         mentorname: 1
        //     }
        // })
        console.log(details);
        res.send(details);
    }
}

module.exports = service;