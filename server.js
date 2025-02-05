// // // import express from 'express';
// // // import dotenv from 'dotenv';
// // // import cors from 'cors';
// // // import connectDB from './config/db.js';
// // // import userRoutes from './routes/userRoutes.js';

// // // // Load env variables
// // // dotenv.config();

// // // // Connect to MongoDB
// // // connectDB();

// // // const app = express();

// // // // Middleware
// // // app.use(express.json());
// // // app.use(cors());

// // // // Routes
// // // app.use('/api', userRoutes);

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // import express from "express";
// // import dotenv from "dotenv";
// // import cors from "cors";
// // import connectDB from "./config/db.js";
// // import userRoutes from "./routes/testRoutes.js";
// // import testRoutes from "./routes/testRoutes.js"; // Import testRoutes

// // dotenv.config();
// // connectDB();

// // const app = express();

// // // Middleware
// // app.use(express.json());
// // app.use(cors());

// // // Routes
// // app.use("/api/users", userRoutes);
// // app.use("/api/test", testRoutes); // Add testRoutes

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";


// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use("/api/users", userRoutes);
// // app.use("/api/test", testRoutes); // Add new route

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes); // API routes for users

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
