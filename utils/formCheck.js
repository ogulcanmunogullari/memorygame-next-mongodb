import Router from "next/router"

export const formCheck = async ({ e, username, password }) => {
  e.preventDefault()

  const res = await fetch("/api/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  if (res.status === 200) {
    alert("Login successful!")
    localStorage.setItem(
      "check",
      JSON.stringify({ username: username, login: "true" }),
    )
    Router.push(`/${username}`)
  } else if (res.status === 400) {
    return true
  } else if (res.status === 404) {
    register({ username, password })
  }
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
      localStorage.setItem(
        "check",
        JSON.stringify({ username: username, login: "true" }),
      )
      Router.push(`/${username}`)
    } else if (res.status === 400) {
      alert("Registration failed!")
    }
  })
}
