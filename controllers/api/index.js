const router = require("express").Router();
const userRouter = require("./user-routes,js");
const postRoutes = require("./post-routes.js");
const commentRoutes = require("./comment-routes.js");

router.use("/user", userRouter);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
