import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
dotenv.config()
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

let port = process.env.PORT || 5000

let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
 origin: process.env.FRONTEND_URL || true,
 credentials:true
}))

app.get("/", (req, res) => {
  res.json({ message: "Backend API is running", status: "ok" });
});

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)




const startServer = async () => {
  try {
    await connectDb();
  } catch (error) {
    console.log("Warning: Starting server without database connection");
  }
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();


