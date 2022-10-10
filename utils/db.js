import mongoose from "mongoose"

const connectDB = () => {
  mongoose
    .connect(process.env.DB, {
      dbName: "rankings",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB")
    })
    .catch((err) => {
      console.log(err)
    })
}
export default connectDB
