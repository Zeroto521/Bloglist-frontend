import React, { useState, useEffect } from "react"

import BlogForm from "./components/BlogForm"
import blogService from "./services/blogs"
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser")

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    blogService.getAll().then((blogs) => {
      blogs.sort((a, b) => b.likes - a.likes)
      setBlogs(blogs)
    })
  }, [])


  return (
    <div>
      <h1>Blogs</h1>
      <Notification />
      <LoginForm user={user} setUser={setUser} />
      {
        user &&
        <BlogForm blogs={blogs} setBlogs={setBlogs} />
      }
    </div>
  )
}

export default App
