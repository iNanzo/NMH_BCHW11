const Router = require('express').Router();
const fs = require('fs');

//display notes
Router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) console.log(err);
        res.status(200).json(JSON.parse(data));
    });
});

//create new notes
Router.post('/api/notes', (req, res) => {
    let db = [];
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        {
            db = JSON.parse(data);
            db.push(req.body)
            updateDB(db,res)
        }
    });
});

Router.delete('/api/notes/:id', function (req, res) {
    let db = [];
    fs.readFile('./db/db.json', (err, data) => {
        if (err) console.log(err);
        {
            db = JSON.parse(data);
            db.splice(req.params.id-1, 1);
            updateDB(db,res);
        }
    });
})

function updateDB(db,res) {
    let i = 1;
    db.forEach(element => {
        element.id = i;
        i++;
    });
    db = JSON.stringify(db)
    fs.writeFile(
        "./db/db.json",
        db,
        (err) => err ? console.error(err) : res.send("ok")
    )
}

module.exports = Router;