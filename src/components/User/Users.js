import { useSelector } from 'react-redux'
import React from 'react'

import { User } from './User'

const Users = () => {
  const user = useSelector(state => state.user)
  const users = useSelector(state => state.users)

  let dom = null

  if (user)
    dom = (
      <div>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>blogs created</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user =>
                <User key={user.id} user={user} />)
            }
          </tbody>
        </table>
      </div>
    )

  return dom
}

export default Users
