import React, { useEffect } from "react"

function Game({ user }) {
  const [userInfo, setUserInfo] = React.useState("")
  console.log(user)
  useEffect(() => {
    setUserInfo(user)
  }, [user])

  return <div>{userInfo?.name}</div>
}

export default Game

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
      user,
    },
  }
}
