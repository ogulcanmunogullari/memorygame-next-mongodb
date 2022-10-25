import React from "react"

function UserSection({ userScore, score }) {
  return (
    <div>
      <div className="border border-red-600 text-center bg-red-600 text-white p-2 text-lg">
        Your Higher Score - {userScore}
      </div>
      <div className="text-center p-2 text-lg">Current Score - {score}</div>
    </div>
  )
}

export default UserSection
