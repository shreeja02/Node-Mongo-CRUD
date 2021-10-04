var mongoose = require("mongoose");

const RoleSchema = mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

global.UserRoleSchema = mongoose.model("UserRole", RoleSchema);
module.exports = global.UserRoleSchema;
