import mongoose from "mongoose";

let isConnected = false; //track the connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoBD is already connected");
    return;
  }
  try {
    await mongoose.connect("mongodb://localhost:27017/", {
      dbName: "share_prompt",
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
