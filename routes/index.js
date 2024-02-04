const router = require("express").Router();
const bookrouter = require("../module/libaray/libaray.route");
const hotelutils = require("../utils/totalday");
router.use("/api/v1", bookrouter);

(module.exports = router), hotelutils;
