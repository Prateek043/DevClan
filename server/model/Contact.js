const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    phone:{type:String,require:true},
    message:{type:String,required:true},
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

module.exports = mongoose.model('Contact', ContactSchema);
