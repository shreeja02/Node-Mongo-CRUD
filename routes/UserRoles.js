const express = require("express");
const router = express.Router();
var UserRoles = require("../models/UserRoles");
var responseHelper = require("../responseHelper");

router.get("/", async (req, res) => {
  try {
    const data = await UserRoles.find();
    res.json(responseHelper.createSuccessResponse(data));
  } catch (err) {
    res.json(responseHelper.createFailureResponse(err));
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await UserRoles.findOne({ _id: req.params.id });
    res.json(responseHelper.createSuccessResponse(data));
  } catch (err) {
    res.json(responseHelper.createFailureResponse(err));
  }
});

router.post("/", async (req, res) => {
  const userRoles = new UserRoles({
    role: req.body.role,
    isActive: req.body.isActive,
  });

  try {
    const data = await userRoles.save();
    res.json(responseHelper.createSuccessResponse(data));
  } catch (err) {
    res.json(responseHelper.createFailureResponse(err));
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedRole = await UserRoles.remove({ _id: req.params.id });
    res.json(responseHelper.createSuccessResponse(removedRole));
  } catch (err) {
    res.json(responseHelper.createFailureResponse(err));
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUserRole = await UserRoles.updateOne(
      { _id: req.params.id },
      {
        $set: {
          role: req.body.role,
          isActive: req.body.isActive,
        },
      }
    );
    res.json(responseHelper.createSuccessResponse(updatedUserRole));
  } catch (err) {}
});

module.exports = router;
