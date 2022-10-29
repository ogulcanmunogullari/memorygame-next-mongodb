import connectDB from "../../utils/db"
connectDB()
import User from "../../models/users"

export default function handler(req, res) {
  User.find()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
    })
}
