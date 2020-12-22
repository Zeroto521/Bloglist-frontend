import React from 'react'

const blogForm = (props) => {
  const { addBlog, newBlog, setNewBlog } = props

  const handleBlogChange = (event) => {
    setNewBlog(event.target.value)
  }

  return (
    <form onSubmit={addBlog}>
      <input
        value={newBlog}
        onChange={handleBlogChange}
      />
      <button type="submit">save</button>
    </form>
  )
}

export default blogForm
