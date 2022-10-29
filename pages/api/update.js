import connectDB from "../../utils/db"
connectDB()
import User from "../../models/users"

export default function handler(req, res) {
  const { name, score } = req.body
  try {
    User.findOneAndUpdate(
      { name: name },
      { score: score },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!")
        }
        console.log(doc)
      },
    )
    res.status(200)
  } catch {
    res.status(400)
  }
}
