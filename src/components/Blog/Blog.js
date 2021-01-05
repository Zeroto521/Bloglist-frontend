import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import React from 'react'

import { initialize as userInit } from '../../reducers/usersReducer'
import { notify } from '../../reducers/notificationReducer'
import { update, remove } from '../../reducers/blogReducer'
import Comments from '../Comments/Comments'

const blogStyle = {
  'paddingTop': 10,
  'paddingLeft': 2,
  'border': 'solid',
  'borderWidth': 1,
  'marginBottom': 5
}

const Blog = ({ blog }) => (
  <div style={blogStyle}>
    <Link to={`/blogs/${blog.id}`}>
      {blog.title} by {blog.author}
    </Link>
  </div>
)

const BlogDetail = ({ blog }) => {
  const dispatch = useDispatch()

  let dom = null
  if (blog) {
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

    dom = (
      <div>
        <div>
          <h2>{blog.title}</h2>
          <div>{blog.url}</div>
          <div>
            {blog.likes} <button onClick={() => handleLikeChange(blog)}>like</button>
          </div>
          <div>added by {blog.author}</div>
          <button onClick={() => handleRemove(blog)}>remove</button>
        </div>
        <div>
          <h2>Comments</h2>
          <Comments blog={blog} />
        </div>
      </div>
    )
  }

  return dom
}

export { Blog, BlogDetail }
