import mongoose from "mongoose";
const connectDb = async () => {
    if (!process.env.MONGODB_URL) {
        console.log("Warning: MONGODB_URL not configured. Database features will not work.");
        console.log("Please set MONGODB_URL environment variable to connect to MongoDB.");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected")
    } catch (error) {
        console.log("DB connection error:", error.message)
        throw error;
    }
    
}
export default connectDb