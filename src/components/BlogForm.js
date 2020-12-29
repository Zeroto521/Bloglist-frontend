import React from 'react'

import Blog from './Blog'
import blogService from "../services/blogs"

const BlogForm = (props) => {
  const { blogs, setBlogs, notifyWith } = props

  const handleLikeChange = async (blog) => {
    await blogService.update(blog.id, {
      'title': blog.title,
      'author': blog.author,
      'url': blog.url,
      'likes': blog.likes + 1,
    })

    const blogs = await blogService.getAll()
    setBlogs(blogs)

    notifyWith(`blog likes+1 ${blog.title} by ${blog.author}`)
  }

  const handleRemove = async (blog) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      await blogService.remove(blog.id)

      let blogs = await blogService.getAll()
      blogs.sort((a, b) => b.likes - a.likes)
      setBlogs(blogs)

      notifyWith(`Removed blog ${blog.title} by ${blog.author}`, 'error')
    }
  }


  return (
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
  )
}

export default BlogForm
