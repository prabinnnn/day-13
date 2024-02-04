const router = require("express").Router();
const e = require("express");
const hotelcontroller = require("./hotel.controller");
const checkrole = () => {
  return (req, res, next) => {
    const userrole = req.body || req.header;
    const user = /^[a-z][A-z]$/g;
    if (user.test(userrole)) {
      res.json({ msg: "entry in hotel" });
    } else {
      res.json({ msg: "not entry" });
    }
    next();
  };
};
const checkphonenumber = () => {
  return (req, res, next) => {
    const userrole = req.body || req.header;
    const users = /^[0-9]{9}$/g;
    if (users.test(userrole)) {
      res.json({ msg: "phone number valid" });
    } else {
      res.json({ msg: "number not valid" });
    }
    next();
  };
};
const checkin = (req, res, next) => {};
router.get("/", async (req, res, next) => {
  try {
    result = await hotelcontroller.getById(req.params.id);
  } catch (e) {
    next(e);
  }
});
router.post(
  "/",
  checkrole("user"),
  checkphonenumber("user"),
  checkin("user"),
  async (req, res, next) => {
    try {
      result = await hotelcontroller.create(req.body);
    } catch (e) {
      next(e);
    }
  }
);
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    result = await hotelcontroller.updateById(id, body);
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    result = await hotelcontroller.getById(id, body);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
