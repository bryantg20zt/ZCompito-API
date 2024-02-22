import { Router } from 'express'
import tasks from '../resources/tasks.json' with { type: 'json' }

export const taskRouting = Router()


taskRouting.get('/', (req, res) => {
  res.json(tasks).status(200)
})

taskRouting.post('/', (req, res) => {
  res.send("AGREGANDO TAREA")
})

taskRouting.patch('/', (req,res) => {
  res.send("ACTUALIZACION DE TAREA")
})

taskRouting.delete('/', (req,res) => {
  res.send("COMPLETANDO TAREA")
})