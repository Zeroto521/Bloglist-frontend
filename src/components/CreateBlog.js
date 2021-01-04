import React from 'react'

import { useField } from '../hooks'

const CreateBlog = ({ addBlog }) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

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
