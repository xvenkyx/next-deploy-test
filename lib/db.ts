import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI!, {
      dbName: "next-restapi",
      bufferCommands: false,
    });
    console.log("Connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};


export default connect;