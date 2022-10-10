import User from "../../../models/users"
import connectDB from "../../../utils/db"

connectDB()

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
