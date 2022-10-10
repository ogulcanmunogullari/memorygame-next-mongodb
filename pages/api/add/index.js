import User from "../../../models/users"
import connectDB from "../../../utils/db"

connectDB()
export default function handler(req, res) {
  const { name, score } = req.body
  const user = new User({
    name,
    score,
  })
  user.save()
}
