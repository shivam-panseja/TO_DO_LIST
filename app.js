const express = require("express");

const app = express();

const todos = [];

// app.use('/Static', express.Static('Static'))

app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));
console.log("hi am here");

// app.get("/home", (req, res) => {
//   res.send("hooray working");
// });

// can place authentication here

app.get("/", (req, res) => {
  res.render("index.ejs", {
    name: "Shivam",
    todos: todos,
  });
});

app.post("/", (req, res) => {
  // push new todo into array
  todos.push(req.body);
  // redirect back to main page (refresh page)
  res.redirect("/");
});



app.listen(3000, () => {
  console.log("The Port is running on 3000");
});
