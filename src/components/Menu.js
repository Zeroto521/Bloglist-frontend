import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'

import { setUser, logout } from '../reducers/userReducer'

const Menu = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const padding = {
    'paddingRight': 5
  }

  const handleLogout = () => {
    logout()
    dispatch(setUser(null))
  }

  const loginLink = () => {
    if (user) {
      return <button onClick={handleLogout}>logout</button>
    }
  }

  return (
    <div>
      <Link style={padding} to="/">blogs</Link>
      <Link style={padding} to="/users">users</Link>
      {loginLink()}
    </div>
  )
}

export default Menu
