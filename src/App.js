import React, { useState, useEffect } from 'react'

import blogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginForm from './components/LoginForm'
import loginService from './services/login'
import Notification from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [notification, setNotification] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  const notifyWith = (message, type = 'success') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      notifyWith('wrong credentials', 'error')
      setTimeout(() => {
        notifyWith(null)
      }, 3000)
    }
  }

  const addBlog = (event) => {
    event.preventDefault()
  }


  return (
    <div>
      <h1>Blogs</h1>
      <Notification notification={notification} />

      <loginForm handleLogin={handleLogin} username={username}
        setUsername={setUsername} password={password} setPassword={setPassword} />
      ----------------------
      <div>
        <p>{user} logged in</p>
        <blogForm addBlog={addBlog} newBlog={newBlog} setNewBlog={setNewBlog} />
      </div>
    </div>
  )
}

export default App