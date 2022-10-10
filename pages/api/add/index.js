// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  const { name, score } = req.body
  const user = new User({
    name,
    score,
  })
  user.save()
}
