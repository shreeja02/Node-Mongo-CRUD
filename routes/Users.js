const express = require("express");
const router = express.Router();
var Users = require("../models/Users");
var responseHelper = require("../responseHelper");
refreshTokens = [];

router.get("/", async (req, res) => {
  try {
    const data = await Users.find().populate("userType");
    res.json(responseHelper.createSuccessResponse(data));
  } catch (err) {
    res.json(responseHelper.createFailureResponse(err));
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Users.findOne({ _id: req.params.id });
    res.json(responseHelper.createSuccessResponse(data));
  } catch (err) {
    res.json(responseHelper.createFailureResponse(err));
  }
});

router.get("/searchUser/:text", async (req, res) => {
  try {
    const data = await Users.find({
      $or: [
        { firstName: { $regex: req.params.text } },
        { lastName: { $regex: req.params.text } },
        { phoneNumber: { $regex: req.params.text } },
      ],
    });
    res.json(responseHelper.createSuccessResponse(data));
  } catch (err) {
    res.json(responseHelper.createFailureResponse(err));
  }
});

router.post("/", async (req, res) => {
  try {
    var userData = new Users({
      phoneNumber: req.body.phoneNumber,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      isActive: req.body.isActive,
    });
    const data = await userData.save();
    res.json(responseHelper.createSuccessResponse(data));
  } catch (err) {
    res.json(responseHelper.createFailureResponse(err));
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedUser = await Users.remove({ _id: req.params.id });
    res.json(responseHelper.createSuccessResponse(removedUser));
  } catch (err) {
    res.json(responseHelper.createFailureResponse(err));
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await Users.updateOne(
      { _id: req.params.id },
      {
        $set: {
          phoneNumber: req.body.phoneNumber,
          emailId: req.body.emailId,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          isActive: req.body.isActive,
        },
      }
    );
    res.json(responseHelper.createSuccessResponse(updatedUser));
  } catch (err) {}
});

module.exports = router;
