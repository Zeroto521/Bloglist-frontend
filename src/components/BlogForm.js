import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'

import { initialize } from '../reducers/blogReducer'
import Blog from './Blog'
import CreateBlog from "./CreateBlog"
import Togglable from "./Togglable"

const BlogForm = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)

  useEffect(() => { dispatch(initialize()) }, [])

  return (
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

export default BlogForm
