import '@testing-library/jest-dom'
import { prettyDOM } from '@testing-library/dom'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import Blog from './Blog'
import blogService from '../services/blogs'
import loginService from '../services/login'

const blog = {
  'title': "React patterns",
  'author': "Michael Chan",
  'url': "https://reactpatterns.com",
  'likes': 7
}

const testUser = {
  'username': 'test',
  'password': 'test',
}

beforeEach(async () => {
  const user = await loginService.login(testUser)
  window.localStorage.setItem(
    'loggedBlogappUser', JSON.stringify(user)
  )

  blogService.setToken(user.token)
})

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
    <Blog blog={blog} />
  )

  const buttonView = component.getByText('view')
  fireEvent.click(buttonView)

  const blogAll = component.container.querySelector('.blogAll')
  expect(blogAll).toBeVisible()
  expect(blogAll).toHaveTextContent(`${blog.url}`)
  expect(blogAll).toHaveTextContent(`${blog.likes}`)
})


test('click like button twice and likes will plus two', () => {
  const mockSetBlogs = jest.fn()
  const mockNotifyWith = jest.fn()

  const component = render(
    <Blog blog={blog} setBlogs={mockSetBlogs} notifyWith={mockNotifyWith} />
  )

  const buttonView = component.getByText('view')
  fireEvent.click(buttonView)

  const blogAll = component.container.querySelector('.blogAll')
  expect(blogAll).toBeVisible()

  const buttonLike = component.getByText('like')
  fireEvent.click(buttonLike)
  fireEvent.click(buttonLike)

  console.log(prettyDOM(buttonLike))
})
