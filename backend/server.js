const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())

const git_router = require("./routes/github");
app.use("/github", git_router);

const linked_router = require("./routes/linkedin")
app.use("/linkedin", linked_router)

const emailer = require("./routes/emailer");
app.use("/emailer", emailer)

const leetcode = require("./routes/leetcode")
app.use("/leet", leetcode)

app.listen(6969, () => {
    console.log("Server is running on port 6969");
});
