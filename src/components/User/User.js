import { Link } from "react-router-dom"
import React from 'react'

const User = ({ user }) => (
  <tr>
    <td>
      <Link to={`/users/${user.id}`} >
        {user.username}
      </Link>
    </td>
    <td>{user.blogs.length}</td>
  </tr>
)

const UserDetail = ({ user }) => {
  let dom = null
  if (user)
    dom = (
      <div>
        <h2>{user.username}</h2>
        <h3>added blogs</h3>
        <div>
          {
            user.blogs.map(blog =>
              <li key={blog.id}>{blog.title}</li>
            )
          }
        </div>
      </div>
    )

  return dom
}


export { UserDetail, User }
