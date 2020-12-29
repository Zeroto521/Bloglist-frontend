import axios from 'axios'

// FIX Network Error for jest, jest can't read proxy config.
const baseUrl = 'http://localhost:3001/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }
