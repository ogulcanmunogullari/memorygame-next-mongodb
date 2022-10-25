import React from "react"

function DialogComponent({ open, playAgain }) {
  console.log(open)
  return (
    <dialog
      open={open}
      className="bg-black/75 flex flex-col justify-center items-center absolute w-full h-full top-0 bot-0 right-0 left-0 z-10 text-white">
      <button onClick={() => playAgain()}>Play Again</button>
      <button>Go to rankings</button>
    </dialog>
  )
}

export default DialogComponent
