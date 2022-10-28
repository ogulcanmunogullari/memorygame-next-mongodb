import Head from "next/head"
import { formCheck } from "../utils/formCheck"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Home() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [lock, setLock] = useState(false)
  const usernameRef = useRef()
  const router = useRouter()
  useEffect(() => {
    const check = localStorage.getItem("check")
    if (check) {
      const { username, login } = JSON.parse(check)
      if (login === "true") {
        router.push(`/${username}`)
      }
    }
    usernameRef.current.focus()
  }, [router])

  const formHandle = async ({ e, username, password }) => {
    const check = await formCheck({ e, username, password })
    if (check) {
      alert("Wrong password!")
    } else {
      setLock(true)
    }
  }

  return (
    <>
      <div className="flex justify-center gap-20  border  border-x-0 border-y-0  border-b-2 border-red-600 p-2">
        <Link href="https://github.com/ogulcanmunogullari" passHref>
          <a target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </Link>
        <Link href="https://linkedin.com/in/ogulcanmunogullari" passHref>
          <a target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </Link>
      </div>
      <Head>
        <title>Join Competiton!</title>
      </Head>
      <div className="container mx-auto ">
        <form className="flex flex-col w-96 mx-auto border border-red-600 shadow-2xl rounded-xl p-5 mt-[50%] sm:mt-[15%]">
          <label
            htmlFor="username"
            className="text-xl border-b-2 border-green-600 py-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Your Nickname"
            ref={usernameRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text-green-600 placeholder:text-green-600 p-2"
          />

          <label
            htmlFor="password"
            className="text-xl border-b-2 border-red-600 py-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            minLength={6}
            placeholder="*******"
            value={password}
            className="text-red-600 placeholder:text-red-600 p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            disabled={!(password.length >= 6) || lock}
            className={`border p-2 my-5 w-full transition-all delay-200 ${
              username && password.length >= 6 && !lock
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white pointer-events-none select-none"
            }`}
            onClick={(e) => formHandle({ e, username, password })}>
            Register / Enter
          </button>
          <h1 className="text-xs text-gray-400 mt-2 pointer-events-none select-none">
            You can login or register with a single button, and if you do not
            logout, your login state will be saved, which you can access at any
            time without logging in. -- YOU CAN NOT CLICK HERE --
          </h1>
        </form>
      </div>
    </>
  )
}
