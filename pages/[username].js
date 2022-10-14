import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const data = [
  { id: 1, actId: 1, show: false, actShow: false },
  { id: 2, actId: 1, show: false, actShow: false },
  { id: 3, actId: 2, show: false, actShow: false },
  { id: 4, actId: 2, show: false, actShow: false },
  { id: 5, actId: 3, show: false, actShow: false },
  { id: 6, actId: 3, show: false, actShow: false },
  { id: 7, actId: 4, show: false, actShow: false },
  { id: 8, actId: 4, show: false, actShow: false },
  { id: 9, actId: 5, show: false, actShow: false },
  { id: 10, actId: 5, show: false, actShow: false },
  { id: 11, actId: 6, show: false, actShow: false },
  { id: 12, actId: 6, show: false, actShow: false },
  { id: 13, actId: 7, show: false, actShow: false },
  { id: 14, actId: 7, show: false, actShow: false },
  { id: 15, actId: 8, show: false, actShow: false },
  { id: 16, actId: 8, show: false, actShow: false },
  { id: 17, actId: 9, show: false, actShow: false },
  { id: 18, actId: 9, show: false, actShow: false },
  { id: 19, actId: 10, show: false, actShow: false },
  { id: 20, actId: 10, show: false, actShow: false },
  { id: 21, actId: 11, show: false, actShow: false },
  { id: 22, actId: 11, show: false, actShow: false },
  { id: 23, actId: 12, show: false, actShow: false },
  { id: 24, actId: 12, show: false, actShow: false },
]

function Game({ user }) {
  const router = useRouter()
  const [cards, setCards] = useState(data)
  const [score, setScore] = useState(0)
  const [memory, setMemory] = useState(0)
  useEffect(() => {
    const check = localStorage.getItem("check")
    check ?? router.push("/")
  }, [router])

  const logOut = () => {
    localStorage.removeItem("check")
    window.location.reload()
  }
  const handleCard = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        card.show = true
      }

      if (memory === card.actId) {
        card.actShow = true
      }
      return card
    })
    setCards(newCards)
  }

  return (
    <>
      <div>{user?.name}</div>
      <div>{score}</div>
      <button onClick={() => logOut()}>Logout</button>
      <main>
        <h1>Game</h1>
        <div className="grid grid-cols-4 gap-2">
          {cards.map((item) => (
            <Image
              key={Math.random()}
              src={`${
                item.actShow
                  ? `/card-assets/${item.id}.jpg`
                  : `${
                      item.show
                        ? `/card-assets/${item.id}.jpg`
                        : "/card-assets/kapak.jpg"
                    }`
              }`}
              width={200}
              height={300}
              alt={`card-${item.id}`}
              onClick={() => handleCard(item.id)}
            />
          ))}
        </div>
      </main>
    </>
  )
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
