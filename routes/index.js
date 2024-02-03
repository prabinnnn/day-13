const router = require("express").Router();
const bookrouter = require("../module/libaray/libaray.route"); // Check this path
router.use("/api/v1", bookrouter);

module.exports = router;
