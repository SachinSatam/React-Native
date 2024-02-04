const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors=require("cors")
const app = express();
const port = 8000;

app.use(bodyparser.json());
app.use(cors({origin: true, credentials: true}));
// Separate MongoDB connection logic
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://sachinsatam4:sachin@mapquestapp.syl8dnm.mongodb.net/",

    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

// Model definition
const User = mongoose.model("User", {
  uid: String,
  authenticated: Boolean,
  // Add any other fields you need
});

// Login endpoint
app.post("/login", async (req, res) => {
  try {
    console.log("Endpoint hit: /login")
    const { uid, authenticated } = req.body;

    const user = await User.findOneAndUpdate(
      { uid: uid },
      { authenticated: authenticated }
      // { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found at all" });
    }

    res
      .status(200)
      .json({ message: "User authenticated successfully", user: user });
  } catch (error) {
    console.error(error);
    console.error("Error in /login endpoint:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
