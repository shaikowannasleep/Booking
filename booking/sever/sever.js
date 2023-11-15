const name ="RYAN"
module.exports = {
 name,
};
const express = require("express");

const app = express();

app.get("/api/:message", (req, res) => {
     res.status(200).send(req.params.message);
     });  
app.listen(8000, () => console.log(`Sever is running on port 8000`));
