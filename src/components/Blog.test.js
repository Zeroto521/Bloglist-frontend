import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import Blog from './Blog'

const blog = {
  'title': "React patterns",
  'author': "Michael Chan",
  'url': "https://reactpatterns.com",
  'likes': 7
}

test('default view, can only see title and author', () => {
  const component = render(
    <Blog blog={blog} />
  )

  const blogTitle = component.container.querySelector('.blogTitle')
  expect(blogTitle).toBeDefined()
  expect(blogTitle).toBeVisible()
  expect(blogTitle).toHaveTextContent(`${blog.title} by ${blog.author}`)
})
