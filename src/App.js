import { useDispatch } from 'react-redux'
import React, { useEffect } from "react"

import { initialize } from './reducers/blogReducer'
import { setUser } from './reducers/userReducer'
import BlogForm from "./components/BlogForm"
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
    }
  }, [])

  useEffect(() => { dispatch(initialize()) }, [])

  return (
    <div>
      <h1>Blogs</h1>
      <Notification />
      <LoginForm />
      <BlogForm />
    </div>
  )
}

export default App
