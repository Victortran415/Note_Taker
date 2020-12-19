const router = require("express").Router();
const fs = require("fs");
const notesDB = require("../db/db.json")


router.get("/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
})

router.post("/notes", (req, res) => {
    console.log(req.body)
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);

        notes.push({
            title: req.body.title,
            text: req.body.text
        });

        fs.writeFile("db/db.json", JSON.stringify(notes), (err) => {
            if (err) return res.JSON({ err: "Adding Unsuccessful"});
            res.json ({msg: "Added Successfully"})
        });
    });
})





module.exports = router