import React from 'react'

import CreateComment from "./CreateComment"
import Togglable from "../Togglable"

const Comment = ({ comment }) => (
  <li>{comment}</li>
)

const Comments = ({ blog }) => (
  <div>
    <div>
      <Togglable buttonLabel='add comment'>
        <CreateComment blog={blog} />
      </Togglable>
    </div>
    <div>
      {
        blog.comments.map((comment, index) =>
          <Comment key={index} comment={comment} />)
      }
    </div>
  </div>
)


export default Comments
