const express = require("express");
const port = 4002;
const app = express();

app.get("/teste", (req, res) => {
  return res.json({
    msg: "express working!"
  })
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

// TODO
// INSTALL KNEX
// CREATE/CONECT TO BASIC DATABASE
// CRUD USER DEFAULT TO LOGIN
// DOCUMENT TABLE CREATION
// IMPLEMENT JWT AUTH AND PASSWORD SECURITY