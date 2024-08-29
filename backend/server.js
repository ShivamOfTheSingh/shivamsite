const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())

const git_router = require("./routes/github");
app.use("/github", git_router);

const emailer = require("./routes/emailer");
app.use("/emailer", emailer)

app.listen(6969, () => {
    console.log("Server is running on port 6969");
});
