import User from "../../../models/users"
const mongoose = require("mongoose")

const dbURL = `mongodb+srv://memorygame:${process.env.NEXT_DB_PASSWORD}@memorygame.anasoea.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB")
  })
  .catch((err) => {
    console.log(err)
  })
export default function handler(req, res) {
  const { patchName } = req.query
  const { score } = req.body
  User.findOneAndUpdate(
    { name: patchName },
    { score },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!")
      }
      console.log(doc)
    },
  )
}
