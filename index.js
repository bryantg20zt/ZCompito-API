import express from 'express'
import { taskRouting } from './routes/tasks.js' 
import { authRouting } from './routes/auth.js'

export const app = express()


app.use(express.json());
app.use('/api/auth', authRouting)
app.use('/api/tasks', taskRouting)

app.listen(8000, () => {
  console.log('Running API on port 8K')
})