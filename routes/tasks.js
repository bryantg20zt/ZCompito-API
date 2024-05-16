import { Router } from 'express'
import { createTask, deleteTask, getTasksByUserId, updateTask } from '../controllers/tasks.js'
import tasks from '../resources/tasks.json' with { type: 'json' }

export const taskRouting = Router()

taskRouting.get('/:userId', getTasksByUserId)

taskRouting.post('/:userId', createTask)

taskRouting.patch('/:taskID', updateTask)

taskRouting.delete('/:taskID', deleteTask)
