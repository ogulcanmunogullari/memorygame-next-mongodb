import Head from "next/head"
import { formCheck } from "../utils/formCheck"
import { useState } from "react"

export default function Home() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <Head>
        <title>Join Competiton!</title>
      </Head>
      <form className="flex flex-col w-96 mx-auto">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Your Nickname"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          minLength={6}
          placeholder="*******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="border p-2 w-full"
          onClick={(e) => formCheck({ e, username, password })}>
          Register / Enter
        </button>
      </form>
    </div>
  )
}
