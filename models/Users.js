var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
  },
  userType: {
    type: Schema.Types.ObjectId,
    ref: "UserRole",
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

global.UserSchema = mongoose.model("User", UserSchema);
module.exports = global.UserSchema;
