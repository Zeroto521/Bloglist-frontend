import PropTypes from 'prop-types'
import React from 'react'

import { useVisible } from '../hooks'

const Togglable = (props) => {
  const visible = useVisible()

  return (
    <div>
      <div style={visible.hideWhenVisible}>
        <button onClick={visible.toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={visible.showWhenVisible}>
        {props.children}
        <button id='cancel' onClick={visible.toggleVisibility}>cancel</button>
      </div>
    </div>
  )
}

Togglable.propTypes = {
  'buttonLabel': PropTypes.string.isRequired
}

export default Togglable
