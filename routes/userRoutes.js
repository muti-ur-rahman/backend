// // import express from "express";
// // import User from "../models/userModel.js"; // Import Mongoose model

// // const router = express.Router();

// // // Create a new user
// // router.post("/add", async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     const newUser = new User({ name, email, password });

// //     await newUser.save();

// //     res.status(201).json({ message: "User added successfully", user: newUser });
// //   } catch (error) {
// //     res.status(500).json({ message: "Error adding user", error: error.message });
// //   }
// // });

// // export default router;
// import express from "express";
// import Test from "../models/testModel.js"; // Import the new Test model

// const router = express.Router();

// // Get all documents from the 'test' collection
// router.get("/", async (req, res) => {
//   try {
//     const testData = await Test.find();
//     res.status(200).json(testData);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching data", error: error.message });
//   }
// });

// export default router;
import express from "express";
import Test from "../models/userModel.js"; // Import Test model

const router = express.Router();

// Get all documents from the 'test' collection
router.get("/", async (req, res) => {
  try {
    const testData = await Test.find(); // Fetch all records
    res.status(200).json(testData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
});

export default router;
