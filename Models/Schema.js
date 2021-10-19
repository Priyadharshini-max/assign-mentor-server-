const Joi = require("joi");

const mentor = Joi.object({
    mentorname: Joi.string().min(3).required(),
    mentormailid: Joi.string().required().email(),
    mentorphno: Joi.number().integer().min(1000000000).max(9999999999).required()
})

const student = Joi.object({
    studentname: Joi.string().min(3).required(),
    studentmailid: Joi.string().required().email(),
    studentphno: Joi.number().integer().min(1000000000).max(9999999999).required(),
    studentbatch: Joi.string().required(),
    mentorId: 0
})
module.exports = {
    mentor,
    student
}