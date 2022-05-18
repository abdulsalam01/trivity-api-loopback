import 'dotenv/config'

export default {
  apiPrefix: `${process.env.VERSION_API}/api`,
  version: process.env.VERSION_API,
  backendUrl: process.env.BACKEND_URL,
  secretKey: process.env.SECRET_KEY
}
