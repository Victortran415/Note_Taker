const router = require("express").Router();
const fs = require("fs");
const notesDB = require("../db/db.json")


router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
})

router.post("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);

        notes.push(req.body)
        console.log(notes)

        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) return res.JSON({ err: "trouble adding notes" });
        res.json({ msg: "Notes added" })

        res.json(req.body)
        });
    });
})



module.exports = router