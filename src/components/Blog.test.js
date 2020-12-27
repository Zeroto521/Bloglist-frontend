import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
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

test('click view button and can see blog detail', () => {
  const component = render(
    <Blog blog={blog} mockLikeChangeHandler />
  )

  const buttonView = component.getByText('view')
  fireEvent.click(buttonView)


  const blogAll = component.container.querySelector('.blogAll')
  expect(blogAll).toBeVisible()
  expect(blogAll).toHaveTextContent(`${blog.url}`)
  expect(blogAll).toHaveTextContent(`${blog.likes}`)

})
