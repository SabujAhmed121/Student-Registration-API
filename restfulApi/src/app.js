const express = require("express");
require("./db/conn");
const Student = require("./models/students")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello from the other side from Sabuj Boss")
})

app.post("/student", async (req, res) => {
    try{
        console.log(req.body);
        const user = new Student(req.body);
        const insert = await user.save();
        res.status(201).send(insert);
    }
    catch(err) {
        res.status(400).send(err);
    };
    res.send("Hello from the other side");
})

app.listen(port, () => {
    console.log(`Succesfully install restful api at ${port}`);
})