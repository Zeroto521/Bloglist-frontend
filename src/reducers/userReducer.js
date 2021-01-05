import { setToken } from "../services/token"

const reducer = (state = null, action) => {
  switch (action.type) {
  case 'USER_SET':
    setToken(null)
    if (action.user) {
      setToken(action.user.token)
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
