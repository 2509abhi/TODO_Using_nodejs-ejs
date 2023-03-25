const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");


app.use(express.static("public"));
const items = ["Early Morning Wakeup"];
const list = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000);
app.get("/about", function(req,res){
    res.render("about");
});
app.get("/", function (req, res) {
  res.render("list", { days: date.getDate(), item: items });
});
app.get("/work", function (req, res) {
  res.render("list", { days: "Worked-List", item: list });
});
app.post("/", function (req, res) {
  let item = req.body.todoitem;
  if (req.body.subname === "Worked-List") {
    list.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});
app.post("/work", function(req,res){
    let item = req.body.todoitem;
    list.push(item);
    res.redirect("/work");
});
