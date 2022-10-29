import connectDB from "../../../utils/db"
connectDB()
import User from "../../../models/users"
import bcrypt from "bcrypt"

export default async function handler(req, res) {
  const { name, password } = req.body
  const salt = bcrypt.genSaltSync(1)
  const hashedPassword = bcrypt.hashSync(password, salt)
  try {
    const user = new User({
      name,
      password: hashedPassword,
      score: 0,
    })
    user.save()
    res.status(200).json()
  } catch {
    res.status(400).json()
  }
}
