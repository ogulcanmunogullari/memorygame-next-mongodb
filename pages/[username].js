import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const data = [
  { id: 1, actId: "egg-1", show: false, actShow: false },
  { id: 2, actId: "egg-1", show: false, actShow: false },
  { id: 3, actId: "egg-2", show: false, actShow: false },
  { id: 4, actId: "egg-2", show: false, actShow: false },
  { id: 5, actId: "egg-3", show: false, actShow: false },
  { id: 6, actId: "egg-3", show: false, actShow: false },
  { id: 7, actId: "egg-4", show: false, actShow: false },
  { id: 8, actId: "egg-4", show: false, actShow: false },
  { id: 9, actId: "egg-5", show: false, actShow: false },
  { id: 10, actId: "egg-5", show: false, actShow: false },
  { id: 11, actId: "egg-6", show: false, actShow: false },
  { id: 12, actId: "egg-6", show: false, actShow: false },
  { id: 13, actId: "egg-7", show: false, actShow: false },
  { id: 14, actId: "egg-7", show: false, actShow: false },
  { id: 15, actId: "egg-8", show: false, actShow: false },
  { id: 16, actId: "egg-8", show: false, actShow: false },
  { id: 17, actId: "egg-9", show: false, actShow: false },
  { id: 18, actId: "egg-9", show: false, actShow: false },
  { id: 19, actId: "egg-10", show: false, actShow: false },
  { id: 20, actId: "egg-10", show: false, actShow: false },
  { id: 21, actId: "egg-11", show: false, actShow: false },
  { id: 22, actId: "egg-11", show: false, actShow: false },
  { id: 23, actId: "egg-12", show: false, actShow: false },
  { id: 24, actId: "egg-12", show: false, actShow: false },
]

function Game({ user }) {
  const router = useRouter()
  const [cards, setCards] = useState(data)
  const [score, setScore] = useState(0)
  const [memory, setMemory] = useState(0)
  const [count, setCount] = useState(0)
  useEffect(() => {
    const check = localStorage.getItem("check")
    check ?? router.push("/")
  }, [router])

  const logOut = () => {
    localStorage.removeItem("check")
    window.location.reload()
  }
  const handleCard = (id, actId) => {
    let newCards = [...cards]
    newCards[id - 1].show = true
    setCards(newCards)
    if (count === 0) {
      setMemory(id)
      setCount(1)
    } else {
      if (memory === id) {
        setCount(0)
      } else {
        if (newCards[memory - 1].actId === actId) {
          newCards[memory - 1].actShow = true
          newCards[id - 1].actShow = true
          setScore((old) => old + 50)
          setCount(0)
        } else {
          setTimeout(() => {
            newCards[memory - 1].show = false
            newCards[id - 1].show = false
            setScore((old) => old - 10)
            setCount(0)
          }, 1000)
        }
      }
    }
  }

  return (
    <div className="container mx-auto">
      <div>{user?.name}</div>
      <div>{score}</div>
      <button onClick={() => logOut()}>Logout</button>
      <main className="md:w-1/2 mx-auto">
        <h1>Game</h1>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2  mx-auto">
          {cards.map((item) => (
            <Image
              key={Math.random()}
              src={`${
                item.actShow
                  ? `/card-assets/${item.actId}.jpg`
                  : `${
                      item.show
                        ? `/card-assets/${item.actId}.jpg`
                        : "/card-assets/kapak.jpg"
                    }`
              }`}
              width={200}
              height={300}
              alt={`card-${item.id}`}
              onClick={() => handleCard(item.id, item.actId)}
            />
          ))}
        </div>
      </main>
    </div>
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
