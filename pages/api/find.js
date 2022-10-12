import User from "../../models/users"
import connectDB from "../../utils/db"

connectDB()
export default function handler(req, res) {
  const { username } = req.body
  User.findOne({ name: { $eq: username } }).then((result) => {
    if (result) {
      res.status(200).json({ message: result })
    } else {
      res.status(404).json({ message: "User not found" })
    }
  })
}
