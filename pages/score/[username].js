import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function Score({ user: ourUser }) {
  const [allUsers, setAllUsers] = useState([])
  const router = useRouter()
  useEffect(() => {
    const check = localStorage.getItem("check")
    check ?? router.push("/")
  }, [router])
  const logOut = () => {
    localStorage.removeItem("check")
    router.push("/")
  }
  const playAgain = () => {
    router.back()
  }
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:3000/api/get")
      const data = await res.json()
      setAllUsers(data)
    }
    fetchUsers()
  }, [])

  return (
    <main className="mx-auto container">
      <button onClick={() => logOut()}>LogOut</button>
      <button onClick={() => playAgain()}>Play Again</button>
      <ul>
        {allUsers?.map((user) => {
          return (
            <li
              key={Math.random()}
              className={`grid grid-cols-2 ${
                user.name === ourUser && "bg-red-400"
              }`}>
              {" "}
              <span>{user.name}</span> <span>{user.score}</span>{" "}
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Score
export const getServerSideProps = async (context) => {
  const { username } = context.query
  const res = await fetch("http://localhost:3000/api/find", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  })
  const data = await res.json()
  const user = await data.message

  return {
    props: {
      user: user.name,
    },
  }
}
