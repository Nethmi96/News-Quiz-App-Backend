const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://Nethmi:lZmVN2mJK4ew1g8N@newsquizapp.7qq5ef7.mongodb.net/?retryWrites=true&w=majority&appName=NewsQuizApp",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/demographics", require("./routes/demographics"));
app.use("/api/quiz", require("./routes/quiz"));
app.use("/api/bigfive", require("./routes/bigfive"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
