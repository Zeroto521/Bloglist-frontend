import service from "../services/blogs"


const reducer = (state = null, action) => {
  switch (action.type) {
  case 'USER_SET':
    service.setToken(null)
    if (action.user) {
      service.setToken(action.user.token)
    }
    return action.user
  default:
    return state
  }
}

const setUser = (user) => ({
  'type': 'USER_SET',
  user
})

export { setUser }
export default reducer
