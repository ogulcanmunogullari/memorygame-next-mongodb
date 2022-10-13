import User from "../../models/users"
import connectDB from "../../utils/db"
import bcrypt from "bcrypt"
connectDB()

export default async function handler(req, res) {
  const { username, password } = req.body

  const result = await User.findOne({ name: { $eq: username } })

  if (result) {
    const compare = await bcrypt.compare(password, result.password)
    if (compare) {
      res.status(200).json({ message: "Welcome" })
    } else {
      res.status(400).json({ message: "Wrong Password" })
    }
  } else {
    res.status(404).json({ message: "User not found" })
  }
}
