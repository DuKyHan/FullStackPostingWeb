const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const postRouter = require("./routes/posts");
app.use("/posts", postRouter);
const commentRouter = require("./routes/comments");
app.use("/comments", commentRouter);
const userRouter = require("./routes/users");
app.use("/auth", userRouter);
const likeRouter = require("./routes/likes");
app.use("/likes", likeRouter);

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
db.sequelize.sync().then(() => {
  app.listen(3001, console.log("Server running on port 3001s"));
});
