import React from 'react'

const loginForm = props => {
  const { handleLogin, username, setUsername, password, setPassword } = props

  return (
    <div>
      <h2>log in to application</h2>
      <div>
        <form onSubmit={handleLogin}>
          <div>
            username
          <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
          <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  )
}

export default loginForm
