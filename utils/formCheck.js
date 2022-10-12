import Router from "next/router"
export const formCheck = ({ e, username, password }) => {
  e.preventDefault()
  fetch("/api/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => {
    if (res.status === 200) {
      alert("Login successful!")
      Router.push(`/${username}`)
    } else if (res.status === 400) {
      alert("Wrong password!")
    } else if (res.status === 404) {
      register({ username, password })
    }
  })
}
export const register = ({ username, password }) => {
  fetch("/api/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: username,
      password,
      score: 0,
    }),
  }).then((res) => {
    if (res.status === 200) {
      alert("Registration successful!")
      Router.push(`/${username}`)
    } else if (res.status === 400) {
      alert("Registration failed!")
    }
  })
}
