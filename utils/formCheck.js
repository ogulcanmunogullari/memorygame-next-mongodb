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
    localStorage.setItem(
      "check",
      JSON.stringify({ username: username, login: "true" }),
    )
    Router.push(`/${username}`)
    alert(`Welcome ${username}`)
  } else if (res.status === 400) {
    alert("Wrong Password!")
  } else if (res.status === 404) {
    register({ username, password })
  }
}
export const register = async ({ username, password }) => {
  fetch("/api/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: username,
      password,
    }),
  }).then((res) => {
    if (res.status === 200) {
      localStorage.setItem(
        "check",
        JSON.stringify({ username: username, login: "true" }),
      )
      Router.push(`/${username}`)
      alert("Registration successful, please wait!")
    } else if (res.status === 400) {
      alert("Registration failed!")
    }
  })
}
