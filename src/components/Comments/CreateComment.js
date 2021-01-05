import { useDispatch } from 'react-redux'
import React from 'react'

import { addComment } from '../../reducers/blogReducer'
import { notify } from '../../reducers/notificationReducer'
import { useField } from '../../hooks'

const CreateComment = ({ blog }) => {
  const comment = useField('text')
  const dispatch = useDispatch()

  const handleSubmit = (event, id, comment) => {
    event.preventDefault()
    dispatch(addComment(id, { comment }))
    dispatch(notify(`a new comment for ${blog.title}, ${comment}`))
  }

  return (
    <div>
      <h2>create comment</h2>
      <form onSubmit={event => handleSubmit(event, blog.id, comment.value)}>
        <div>comment: <input {...comment} /></div>
        <button type="submit" id='create'>create</button>
      </form>
    </div>
  )
}

export default CreateComment