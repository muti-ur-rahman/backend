
import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    name: String,
    email: String, // Optional if your test collection has email
    password: String, // Optional if applicable
  },
  { collection: "test" } // Explicitly specify the collection name
);

const Test = mongoose.model("Test", testSchema);

export default Test;
