import express from 'express'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import columnsRouter from './routes/columnRoutes.js'
import taskRouter from './routes/taskRoutes.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compression())
app.use(helmet())
app.use(cors())

const port = 3000

app.use('/api/v1/columns', columnsRouter);
app.use('/api/v1/tasks', taskRouter);

app.listen(port, () => {
  console.log(`Kanban API listening on port ${port}`)
})
