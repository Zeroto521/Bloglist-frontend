import { useDispatch, useSelector } from 'react-redux'
import React from 'react'

import { notify } from '../../reducers/notificationReducer'
import { setUser, login, saveToLocal } from '../../reducers/userReducer'
import { useLogin } from '../../hooks'

const LoginForm = () => {
  const user = useSelector(state => state.user)
  const account = useLogin()
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await login(
        account.username.value,
        account.password.value)
      dispatch(setUser(user))
      saveToLocal(user)
      dispatch(notify('Welcome.'))
    } catch (exception) {
      dispatch(notify('Wrong username or password.', 'error'))
    }
  }

  if (user) {
    return null
  }

  return (
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

export default LoginForm
