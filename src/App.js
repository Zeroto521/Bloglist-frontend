import { Switch, Route, useRouteMatch } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from "react"

import { initialize as blogInit } from './reducers/blogReducer'
import { initialize as userInit } from './reducers/usersReducer'
import { setUser } from './reducers/userReducer'
import { UserDetail } from './components/User/User'
import Blogs from "./components/Blog/Blogs"
import LoginForm from "./components/User/LoginForm"
import Notification from "./components/Notification"
import Users from "./components/User/Users"

const App = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
    }
  }, [])

  useEffect(() => { dispatch(blogInit()) }, [])
  useEffect(() => { dispatch(userInit()) }, [])

  const match = useRouteMatch('/users/:id')
  const user = match
    ? users.find(user => user.id === match.params.id)
    : null

  return (
    <div>
      <h1>Blogs</h1>
      <Notification />
      <LoginForm />

      <Switch>
        <Route path="/users/:id">
          <UserDetail user={user} />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  )
}

export default App
