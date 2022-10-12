import User from "../../../models/users"
import connectDB from "../../../utils/db"

connectDB()
export default function handler(req, res) {
  const { name, password, score } = req.body
  try {
    const user = new User({
      name,
      password,
      score,
    })
    user.save()
    res.status(200).json({ success: true })
  } catch {
    res.status(400).json({ success: false })
  }
}
