const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const multer = require("multer");
const Product = require("./models/product");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static("public"));

//  Image Upload Setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads"); // folder where image will save
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });
mongoose.connect("mongodb://127.0.0.1:27017/inventory")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));


app.get("/add", (req, res) => {
    res.render("add");
});

app.post("/products", upload.single("image"), async (req, res) => {
    try {
        const { name, price, quantity } = req.body;

        // ❌ If no image uploaded
        if (!req.file) {
            return res.send("Image is required");
        }

        const newProduct = new Product({
            name,
            price,
            quantity,
            image: req.file.filename
        });

        await newProduct.save();

        res.redirect("/products?msg=added");

    } catch (err) {
        console.log(err);
        res.send("Error occurred");
    }
});

app.get("/products", async (req, res) => {
    const products = await Product.find();
    const msg = req.query.msg;
    res.render("products", { products, msg });
});


app.delete("/products/:id", async (req, res) => {
await Product.findByIdAndDelete(req.params.id);
res.redirect("/products?msg=deleted");
});


app.get("/products/:id/edit", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render("edit", { product });
});


app.put("/products/:id", async (req, res) => {
    const { name, price, quantity } = req.body;

    await Product.findByIdAndUpdate(req.params.id, {
        name,
        price,
        quantity
    });

    res.redirect("/products?msg=updated");
});

app.listen(8080, () => {
    console.log("Server running on 8080");
});