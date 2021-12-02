/* Constants */

//Requires
const notesRoute = require("express").Router();
const fs = require("fs");
//NPM package that generates IDs
const { v4: getID } = require("uuid");
//dbJson shortener
const dbJson = "./db/db.json";

/* Routes */

//Get Stored Notes from db.json
notesRoute.get("/", (req, res) => {
    fs.readFile(dbJson, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            if (data.length == 0) {
                res.json("");
            } else {
                res.json(JSON.parse(data));
            }
        }
    })
});

//Create Note
notesRoute.post("/", (req, res) => {

    const { title, text } = req.body;

    if (req.body) {
        const createdNote = {
            id: getID(),
            title,
            text,
        }
        fs.readFile(dbJson, (err, data) => {
            if(err) {
                console.error(err);
            }
            else {
                let noteArray;
                if(data.length == 0) {
                    noteArray = [];
                }
                else {
                    noteArray = JSON.parse(data);
                }
                noteArray.push(createdNote);
                fs.writeFile(dbJson, JSON.stringify(noteArray, null, 4), (err) => {
                    if(err) {
                        console.error(err);
                    }
                    else {
                        res.json(`Note "${createdNote.title}" created`)
                    }
                })
            }
        })
    } else {
        res.sendStatus(404).json("Error 404: req.body Invalid");
    }
});

//Delete Note
notesRoute.delete("/:id", (req, res) => {
    fs.readFile(dbJson, (err, data) => {
        if (err) {
            console.error(err);
        }
        else {
            let noteArray;

            if(data.length == 0) {
                noteArray = [];
            }
            else {
                noteArray = JSON.parse(data);
            }

            stashNoteArray = noteArray.filter((note) => {
                return note.id !== req.params.id;
            })

            fs.writeFile(dbJson, JSON.stringify(stashNoteArray), (err) => {
                if(err) {
                    console.error(err);
                }
                else {
                    res.json(`Note ID: ${req.params.id} deleted`);
                }
            })
        }
    })

});

module.exports = notesRoute;