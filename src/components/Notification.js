import { useSelector } from 'react-redux'
import React from 'react'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  let dom = null

  if (notification) {
    dom = (
      <div className={notification.type}>
        {notification.message}
      </div>
    )
  }

  return dom
}

export default Notification
