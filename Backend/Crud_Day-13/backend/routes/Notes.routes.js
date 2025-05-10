const express = require("express");

const { NotesModule } = require("../model/Note.model");

const noteRoutes = express.Router();

noteRoutes.get("/", (req, res) => {
  res.status(201).send("WIP");
});

noteRoutes.post("/create", async (req, res) => {
  const payload = req.body;
  // get token from header
  // verify token using jwt
  try {
    const newNotes = new NotesModule(payload);
    await newNotes.save();
    res.send({ msg: "Note wase created..." });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong!!!" });
  }
});

noteRoutes.patch("/update/:noteID", (req, res) => {
  res.send("WIP");
});

noteRoutes.delete("/delete/:noteID", (req, res) => {
  res.send("WIP");
});

module.exports = { noteRoutes };
