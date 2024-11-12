import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected Successfully", connect);
  } catch (error) {
    console.log("Connection Error", error);
  }
};

export default dbConnect;
