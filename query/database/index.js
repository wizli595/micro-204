import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/myapp_query"
    );
    console.log("Connected to MongoDB" + conn.connection.host);
  } catch (error) {
    console.error(error);
  }
};
export default connectDB;
