import React, { useState, useEffect } from "react"

import BlogForm from "./components/BlogForm"
import blogService from "./services/blogs"
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser")

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      <h1>Blogs</h1>
      <Notification />
      <LoginForm user={user} setUser={setUser} />
      {
        user &&
        <BlogForm />
      }
    </div>
  )
}

export default App
