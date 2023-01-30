import mongoose from "mongoose";

mongoose.set("strictQuery", true); // supress DeprecationWarning
mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

const handleError = (error) => console.error("🚫 DB Error", error);
const handleOpen = () => console.log("✅ Connected to DB");

db.on("error", handleError);
db.once("open", handleOpen);
