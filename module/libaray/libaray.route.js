const router = require("express").Router();
const bookcontroller = require("./libaray.controller");
router.get("/", async (req, res, next) => {
  try {
    result = await bookcontroller.getbyid(Id);
    res.json();
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    console.log({ data });
    const result = await bookcontroller.create(data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log({ id, body });
    const result = await bookcontroller.updateById(id, body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log({ id, body });
    const result = await usercontroller.updateById(id, body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log({ id, body });
    const result = await bookcontroller.deleteOne(id, body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
