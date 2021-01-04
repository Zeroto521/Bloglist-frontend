import { useDispatch } from 'react-redux'
import React from 'react'

import { notify } from '../reducers/notificationReducer'
import { useLogin } from '../hooks'
import blogService from '../services/blogs'

const LoginForm = ({ user, setUser }) => {
  const account = useLogin('http://localhost:3001/api/login')
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await account.login()
      blogService.setToken(user.token)
      setUser(user)
      dispatch(notify('Welcome.'))
    } catch (exception) {
      dispatch(notify('Wrong username or password.', 'error'))
    }
  }

  const handleLogout = () => {
    account.logout()
    setUser(null)
  }

  let dom = null

  if (user) {
    dom = (
      <div>
        <p>
          {user.name} logged in <button onClick={handleLogout}>logout</button>
        </p>
      </div>
    )
  } else {
    dom = (
      <div>
        <h2>log in to application</h2>
        <div>
          <form onSubmit={handleLogin}>
            <div>
              username <input {...account.username} />
            </div>
            <div>
              password <input {...account.password} />
            </div>
            <button type="submit">login</button>
          </form>
        </div>
      </div>
    )
  }

  return dom
}

export default LoginForm
