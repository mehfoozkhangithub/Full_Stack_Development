const express = require("express");

const { NotesModule } = require("../model/Note.model");

const noteRoutes = express.Router();

noteRoutes.get("/", async (req, res) => {
  const payload = req.body;
  const note = await NotesModule.find();
  res.status(201).send(note);
});

noteRoutes.post("/create", async (req, res) => {
  const payload = req.body;
  // get token from header
  // verify token using jwt
  console.log(payload, "create method of notes");
  try {
    const newNotes = new NotesModule(payload);
    await newNotes.save();
    res.send({ msg: "Note wase created..." });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong!!!" });
  }
});

noteRoutes.patch("/update/:noteID", async (req, res) => {
  const payload = req.body;
  const noteID = req.params.noteID;

  const userID = req.body.userID;
  const note = await NotesModule.findOne({ _id: noteID });
  console.log(userID, note, payload);

  if (userID !== note.userID) {
    res.send(`you're not authorized person!!`);
  } else {
    try {
      let newUpdate = await NotesModule.findByIdAndUpdate(
        {
          _id: noteID,
        },
        payload
      );
      // console.log(newUpdate);
      res.send({
        msg: `your Task has been updated succesfully ${newUpdate} with id ${noteID}`,
      });
    } catch (err) {
      res.send({ msg: err });
    }
  }
});

noteRoutes.delete("/delete/:noteID", async (req, res) => {
  const noteID = req.params.noteID;

  const userID = req.body.userID;
  const note = await NotesModule.findOne({ _id: noteID });
  console.log(userID, "this is userID");
  console.log(note, "this is note");

  if (userID !== note.userID) {
    res.send(`you're not authorized person!!`);
  } else {
    try {
      let newUpdate = await NotesModule.findByIdAndDelete({
        _id: noteID,
      });
      // console.log(newUpdate);
      res.send({
        msg: `your Task has been deleted succesfully and id ${noteID}`,
      });
    } catch (err) {
      res.send({ msg: err });
    }
  }
});

module.exports = { noteRoutes };
