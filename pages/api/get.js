import User from "../../models/users"
import connectDB from "../../utils/db"

connectDB()

export default function handler(req, res) {
  User.find()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
    })
}
