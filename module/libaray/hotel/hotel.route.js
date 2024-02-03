const router = require("express").Router();
const hotelcontroller = require("./hotel.controller");
router.get("/", async (req, res, next) => {
  try {
    result = await hotelcontroller.getById(req.params.id);
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    result = await hotelcontroller.create(req.body);
  } catch (e) {
    next(e);
  }
});
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
