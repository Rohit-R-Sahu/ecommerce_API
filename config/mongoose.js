const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

// connecting mongoose to its default server and ecommerce Database
const db = mongoose
  .connect(
    "mongodb+srv://rohit:Roshan@issuetrack.eutg6pb.mongodb.net/ecommerce?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected to Database :: MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB"));

module.exports = db;
