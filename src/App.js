import { useDispatch } from 'react-redux'
import React, { useEffect } from "react"

import { initialize as blogInit } from './reducers/blogReducer'
import { initialize as userInit } from './reducers/usersReducer'
import { setUser } from './reducers/userReducer'
import Blogs from "./components/Blog/Blogs"
import LoginForm from "./components/User/LoginForm"
import Notification from "./components/Notification"
import Users from "./components/User/Users"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
    }
  }, [])

  useEffect(() => { dispatch(blogInit()) }, [])
  useEffect(() => { dispatch(userInit()) }, [])

  return (
    <div>
      <h1>Blogs</h1>
      <Notification />
      <LoginForm />
      <Blogs />
      <Users />
    </div>
  )
}

export default App
