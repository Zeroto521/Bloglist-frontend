import { useState } from 'react'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const useLogin = () => {
  const username = useField('text')
  const password = useField('password')

  return {
    username,
    password
  }
}

const useVisible = () => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }


  return {
    visible,
    toggleVisibility,
    hideWhenVisible,
    showWhenVisible
  }
}

export { useField, useLogin, useVisible }
