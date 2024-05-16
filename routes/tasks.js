import { Router } from 'express'
import { prismaDB } from '../db/connection.js'
import tasks from '../resources/tasks.json' with { type: 'json' }

export const taskRouting = Router()

taskRouting.get('/:userId',async (req, res) => {
  const idUser = req.params.userId
  const response = await prismaDB.user.findMany();
  res.json(response).status(200)
})

taskRouting.post('/:userId', (req, res) => {
  const idUser = req.params.userId
  res.send("AGREGANDO TAREA")
})

taskRouting.patch('/:taskID', (req,res) => {
  const taskID = req.params.taskID
  res.send("ACTUALIZACION DE TAREA")
})

taskRouting.delete('/:taskID', (req,res) => {
  const taskID = req.params.taskId
  res.send("COMPLETANDO TAREA")
})