const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const enrollmentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  courseDetails: {
    type: String,
    required: true,
  },
  courseType: {
    type: String,
    required: true,
  },
  slotTiming: {
    type: String,
  },
  agreed: {
    type: Boolean,
    required: true,
  },
});
enrollmentSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch(err){
        console.log(err);
    }
}

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
