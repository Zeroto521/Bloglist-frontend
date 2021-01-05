import { useSelector } from 'react-redux'
import React from 'react'

import Blog from './Blog'
import CreateBlog from "./CreateBlog"
import Togglable from "./Togglable"

const BlogForm = () => {
  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.user)

  let dom = null
  if (user) {
    dom = (
      <div>
        <div>
          <Togglable buttonLabel='new blog'>
            <CreateBlog />
          </Togglable>
        </div>
        <div>
          <h2>contents</h2>
          {
            blogs.map(blog =>
              <Blog key={blog.id} blog={blog} />
            )
          }
        </div>
      </div>
    )
  }

  return dom
}

export default BlogForm
