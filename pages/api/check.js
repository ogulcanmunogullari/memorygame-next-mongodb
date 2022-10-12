import User from "../../models/users"
import connectDB from "../../utils/db"

connectDB()
export default function handler(req, res) {
  const { username, password } = req.body
  User.findOne({ name: { $eq: username } }).then((result) => {
    if (result) {
      if (result.password === password) {
        res.status(200).json({ message: "Welcome" })
      } else {
        res.status(400).json({ message: "Wrong Password" })
      }
    } else {
      res.status(404).json({ message: "User not found" })
    }
  })
}
