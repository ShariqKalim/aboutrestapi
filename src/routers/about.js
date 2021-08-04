const express = require("express");
const router = new express.Router();

const aboutus = require("../models/aboutus");

//handling POST request
router.post("/about", async (req, res) => {
  try {
    const addAboutRecords = new aboutus(req.body);
    console.log(req.body);
    const insertAbout = await addAboutRecords.save();
    res.status(201).send(insertAbout);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/about", async (req, res) => {
  try {
    const getAbout = await aboutus.find({});
    res.send(getAbout);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/about/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAbout = await aboutus.findById({ _id });
    res.send(getAbout);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/about/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getAbout = await aboutus.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getAbout);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/about/:id", async (req, res) => {
  try {
    const getAbout = await aboutus.findByIdAndDelete(req.params.id);

    res.send(getAbout);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
