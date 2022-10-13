import User from "../../../models/users"
import connectDB from "../../../utils/db"
import bcrypt from "bcrypt"

connectDB()
export default async function handler(req, res) {
  const { name, password, score } = req.body
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)
  try {
    const user = new User({
      name,
      password: hashedPassword,
      score,
    })
    user.save()
    res.status(200).json({ success: true })
  } catch {
    res.status(400).json({ success: false })
  }
}
