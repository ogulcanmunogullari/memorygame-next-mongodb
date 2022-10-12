import React, { useEffect } from "react"
import { useRouter } from "next/router"

function Game() {
  const [user, setUser] = React.useState({})
  const router = useRouter()
  const { username } = router.query

  useEffect(() => {
    const getUser = async () => {
      if (username) {
        const res = await fetch("http://localhost:3000/api/find", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        })
        const data = await res.json()
        setUser(data.message)
      }
    }
    getUser()
  }, [username])

  return <div>{JSON.stringify(user)}</div>
}

export default Game
