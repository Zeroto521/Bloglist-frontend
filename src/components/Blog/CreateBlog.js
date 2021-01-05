import { useDispatch } from 'react-redux'
import React from 'react'

import { create } from '../../reducers/blogReducer'
import { initialize as userInit } from '../../reducers/usersReducer'
import { notify } from '../../reducers/notificationReducer'
import { useField } from '../../hooks'

const CreateBlog = () => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const dispatch = useDispatch()

  const addBlog = (event, title, author, url) => {
    event.preventDefault()
    dispatch(create({ title, author, url }))
    dispatch(notify(`a new blog ${title} by ${author}`))
    dispatch(userInit())
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={event => addBlog(event, title.value, author.value, url.value)}>
        <div>title: <input {...title} /></div>
        <div>author: <input {...author} /></div>
        <div>url: <input {...url} /></div>
        <button type="submit" id='create'>create</button>
      </form>
    </div>
  )
}

export default CreateBlog
