import { Link } from "react-router-dom"
import React from 'react'

const Menu = () => {
  const padding = {
    'paddingRight': 5
  }

  return (
    <div>
      <Link style={padding} to="/">blogs</Link>
      <Link style={padding} to="/create">users</Link>
    </div>
  )
}

export default Menu
