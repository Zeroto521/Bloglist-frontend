import { useDispatch } from 'react-redux'
import React from 'react'

import { notify } from '../reducers/notificationReducer'
import Blog from './Blog'
import blogService from "../services/blogs"
import CreateBlog from "./CreateBlog"
import Togglable from "./Togglable"

const BlogForm = ({ blogs, setBlogs }) => {
  const dispatch = useDispatch()

  const createBlog = () => (
    <Togglable buttonLabel='new blog'>
      <CreateBlog addBlog={addBlog} />
    </Togglable>
  )

  const addBlog = (event, title, author, url) => {
    event.preventDefault()

    const blogObject = {
      "title": title,
      "author": author,
      "url": url
    }

    blogService.create(blogObject).then(returnedBlog =>
      setBlogs(blogs.concat(returnedBlog))
    )

    dispatch(notify(`a new blog ${title} by ${author}`))
  }

  const handleLikeChange = async (blog) => {
    await blogService.update(blog.id, {
      'title': blog.title,
      'author': blog.author,
      'url': blog.url,
      'likes': blog.likes + 1,
    })

    const blogs = await blogService.getAll()
    setBlogs(blogs)

    dispatch(notify(`blog likes+1 ${blog.title} by ${blog.author}`))
  }

  const handleRemove = async (blog) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      await blogService.remove(blog.id)

      let blogs = await blogService.getAll()
      blogs.sort((a, b) => b.likes - a.likes)
      setBlogs(blogs)

      dispatch(notify(`Removed blog ${blog.title} by ${blog.author}`, 'error'))
    }
  }


  return (
    <div>
      <div>
        {createBlog()}
      </div>

      <div>
        <h2>contents</h2>
        {
          blogs.map(blog =>
            <Blog key={blog.id} blog={blog}
              handleLikeChange={handleLikeChange}
              handleRemove={handleRemove} />
          )
        }
      </div>
    </div>
  )
}

export default BlogForm
