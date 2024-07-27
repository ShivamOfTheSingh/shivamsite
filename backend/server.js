const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const git_router = require("./routes/github");
app.use("/github", git_router);

app.listen(6969, () => {
    console.log("Server is running on port 6969");
});
