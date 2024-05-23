import express, {Router} from 'express'
import { taskRouting } from './routes/tasks.js' 
import { authRouting } from './routes/auth.js'

export const app = express()
const routerMain = Router()

app.use(express.json());

app.use('/api/auth', authRouting)
app.use('/api/tasks', taskRouting)

app.get('/', (req, res) => {
  res.send('API Hello World')
})

app.listen(8000, () => {
  console.log('Running API on port 8K')
})