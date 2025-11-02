const express = require("express");

const { NotesModel } = require('../model/Notes.model');

const notesRoutes = express.Router();

//* read

// http//localhost:3000/notes

notesRoutes.get("/", async (req, res) => {
    try {
        const dbDATA = await NotesModel.find();
        res.status(200).send(dbDATA);
    } catch (error) {
        console.log('🚀 ~ error:', error);
        res.status(404).send({ msg: "not create notes...something went wrong", errro: err });
    }
});

//# create

notesRoutes.post("/create", async (req, res) => {
    let data = { ...req.body, ...req.user };
    try {
        const newNotes = await new NotesModel(data);
        await newNotes.save();
        res.status(201).send({ msg: "create notes...", payload: data });
    } catch (err) {
        console.log('🚀 ~ error:', err);
        res.status(404).send({ msg: "not create notes...something went wrong", errro: err });
    }
});

//& update

notesRoutes.patch("/edit/:noteIDs", async (req, res) => {
    const data = req.body;

    const noteID = req.params.noteIDs;

    const userIDs = req.user.userID;

    const notes = await NotesModel.findOne({ _id: noteID })

    if (userIDs !== notes.userID) {
        res.status(404).send(`you're not authorized person!!`);
    }
    else {
        try {
            let noteUpdate = await NotesModel.findByIdAndUpdate({
                _id: noteID
            }, data);
            res.status(205).send({
                msg: `your Task has been updated succesfully ${noteUpdate} with id ${noteID}`,
            });
        } catch (error) {
            console.log('🚀 ~ error:', error);
        }
    }
});


//! delete

notesRoutes.delete("/delete/:noteIDs", async (req, res) => {

    const noteID = req.params.noteIDs;

    const userIDs = req.user.userID;

    const notes = await NotesModel.findOne({ _id: noteID })

    if (userIDs !== notes.userID) {
        res.status(404).send(`you're not authorized person!!`);
    }
    else {
        try {
            let noteDelete = await NotesModel.findByIdAndDelete({
                _id: noteID
            });
            res.status(306).send({
                msg: `your Task has been deleted succesfully and id was ${noteID}`,
            });
        } catch (error) {
            console.log('🚀 ~ error:', error);
        }
    }
});

module.exports = { notesRoutes };