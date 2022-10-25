import { useRouter } from "next/router"
import React from "react"

function Menu({ game, name }) {
  const router = useRouter()
  const logOut = () => {
    localStorage.removeItem("check")
    router.push("/")
  }
  const reset = () => {
    window.location.reload()
  }
  const playAgain = () => {
    router.back()
  }
  return (
    <div className="flex justify-around my-5">
      {game ? (
        <button
          className="border p-2 border-red-600 hover:bg-red-600 hover:text-white transition-all"
          onClick={() => reset()}>
          Reset
        </button>
      ) : (
        <button
          className="border p-2 border-red-600 hover:bg-red-600 hover:text-white transition-all"
          onClick={() => playAgain()}>
          Play Again
        </button>
      )}
      <div className="border p-2 border-red-600 bg-red-600 text-white ">
        {name.toUpperCase()}
      </div>
      <button
        className="border p-2 border-red-600 hover:bg-red-600 hover:text-white transition-all"
        onClick={() => logOut()}>
        Logout
      </button>
    </div>
  )
}
export default React.memo(Menu)
