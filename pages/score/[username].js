import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Menu from "../../components/Menu"

function Score({ user: ourUser }) {
  const [allUsers, setAllUsers] = useState([])
  const router = useRouter()
  useEffect(() => {
    const check = localStorage.getItem("check")
    check ?? router.push("/")
  }, [router])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:3000/api/get")
      const data = await res.json()
      const sorted = await data.sort((small, big) => big.score - small.score)
      setAllUsers(sorted)
    }
    fetchUsers()
  }, [])

  return (
    <main className="mx-auto container">
      <Head>
        <title>Score Table</title>
      </Head>
      <Menu name={ourUser} />
      <ul>
        {allUsers?.map((user, index) => {
          return (
            <li
              key={Math.random()}
              className={`grid grid-cols-3 sm:grid-cols-4 gap-1 mb-1 `}>
              {" "}
              <span
                className={`flex items-center border border-red-600 col-span-2 sm:col-span-3 p-2 text-lg ${
                  user.name === ourUser && "text-white bg-red-600"
                }`}>
                {index + 1 + ")"} {user.name}
              </span>{" "}
              <span
                className={`flex items-center border border-red-600 p-2 text-lg ${
                  user.name === ourUser && "text-white bg-red-600"
                }`}>
                {user.score}
              </span>{" "}
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
