import { useDispatch } from 'react-redux'
import React from 'react'

import { initialize as userInit } from '../../reducers/usersReducer'
import { notify } from '../../reducers/notificationReducer'
import { update, remove } from '../../reducers/blogReducer'
import { useVisible } from '../../hooks'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const visible = useVisible()

  const blogStyle = {
    'paddingTop': 10,
    'paddingLeft': 2,
    'border': 'solid',
    'borderWidth': 1,
    'marginBottom': 5
  }

  const handleLikeChange = async (blog) => {
    dispatch(update(blog.id, {
      ...blog,
      'likes': blog.likes + 1,
    }))
    dispatch(notify(`blog likes+1 ${blog.title} by ${blog.author}`))
  }

  const handleRemove = async (blog) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      dispatch(remove(blog.id))
      dispatch(notify(`Removed blog ${blog.title} by ${blog.author}`, 'error'))
      dispatch(userInit())
    }
  }

  return (
    <div style={blogStyle}>
      <div style={visible.hideWhenVisible} >
        <div>
          {blog.title} by {blog.author} <button onClick={visible.toggleVisibility}>view</button>
        </div>
      </div>
      <div style={visible.showWhenVisible} >
        <div>
          {blog.title} <button onClick={visible.toggleVisibility}>hide</button>
        </div>
        <div>{blog.url}</div>
        <div>
          {blog.likes} <button onClick={() => handleLikeChange(blog)}>like</button>
        </div>
        <div>{blog.author}</div>
        <button onClick={() => handleRemove(blog)}>remove</button>
      </div>
    </div>
  )
}

export default Blog
