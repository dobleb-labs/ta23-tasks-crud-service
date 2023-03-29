import dotenv from 'dotenv'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import mongoose from 'mongoose'
import errorHandler from './middleware/errorHandler'
import router from './routes'

dotenv.config()

const app = new Koa()

app.use(errorHandler)
app.use(bodyParser())

app.use(router.routes())
app.use(router.allowedMethods())

mongoose.connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(4000, () => {
      console.log('Server is running on port 4000')
    })
  })
  .catch(err => {
    console.log('Error connecting to Mongo', err)
  })
