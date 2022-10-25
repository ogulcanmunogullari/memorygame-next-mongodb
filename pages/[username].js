import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { updateCard, cardsSelector, setAllCards } from "../redux/cardsSlicer"
import cardShuffle from "../utils/cardShuffle"

import Menu from "../components/Menu"
import UserSection from "../components/UserSection"
import Head from "next/head"

function Game({ user }) {
  const data = useSelector(cardsSelector.selectAll)
  const router = useRouter()
  const [cards, setCards] = useState()
  const [score, setScore] = useState(0)
  const [doubles, setDoubles] = useState([])
  const [opened, setOpened] = useState(0)

  const dispatch = useDispatch()
  const setData = () => {
    dispatch(setAllCards(cardShuffle()))
  }
  useEffect(() => {
    setData()
  }, [])
  useEffect(() => {
    setCards(data)
  }, [data])

  useEffect(() => {
    const check = localStorage.getItem("check")
    check ?? router.push("/")
  }, [router])

  const updateUserFunc = ({ name, score }) => {
    fetch("/api/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        score: score,
      }),
    })
  }

  const checkDoubles = async () => {
    if (doubles[0].actId !== doubles[1].actId) {
      setTimeout(() => {
        dispatch(
          updateCard({
            id: doubles[0].id,
            changes: {
              show: false,
            },
          }),
        )
        dispatch(
          updateCard({
            id: doubles[1].id,
            changes: {
              show: false,
            },
          }),
        )
      }, 500)
      setScore((old) => old - 10)
      setOpened((old) => old - 2)
    } else if (doubles[0].actId === doubles[1].actId) {
      setScore((old) => old + 50)
    }
  }
  useEffect(() => {
    if (doubles.length === 2) {
      checkDoubles()
      setDoubles([])
    }
  }, [doubles])

  const handleCard = (id, actId) => {
    if (opened === 23) {
      setData()
      setOpened(0)
      if (user.score >= score) {
        router.push(`/score/${user.name}`)
      } else {
        updateUserFunc({ name: user.name, score })
        router.push(`/score/${user.name}`)
      }
      return
    }
    dispatch(
      updateCard({
        id,
        changes: {
          show: true,
        },
      }),
    )
    setOpened((old) => old + 1)
    setDoubles((old) => [...old, { id, actId }])
  }

  return (
    <div className="container mx-auto">
      <Head>
        <title>{user.name}&rsquo; Game</title>
      </Head>
      <Menu name={user.name} game={true} />
      <UserSection userScore={user.score} score={score} />
      <main className="sm:w-4/5 mx-auto sm:mt-10">
        <div className="grid grid-cols-5 mx-2 sm:grid-cols-6 md:grid-cols-8 gap-2  sm:mx-auto">
          {cards?.map((item) => (
            <div key={Math.random()} className={`${item.show && "scale-110"}`}>
              <Image
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
                className={`${item.show && "scale-150"}`}
                alt={`card-${item.id}`}
                onClick={() =>
                  (!item.show || !(doubles.length < 2)) &&
                  handleCard(item.id, item.actId)
                }
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Game

export const getServerSideProps = async (context) => {
  const { username } = context.query
  //http://localhost:3000
  const res = await fetch("https://online-memory-game.vercel.app//api/find", {
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
