import { Router } from 'express'

export const taskRouting = Router()


taskRouting.get('/', (req, res) => {
  res.send("OBTENIENDO LAS TAREAS")
})


taskRouting.post('/', (req, res) => {
  res.send("AGREGANDO TAREA")
})

taskRouting.patch('/', (req,res) => {
  res.send("Actualizando tarea")
})

taskRouting.delete('/', (req,res) => {
  res.send("COMPLETANDO TAREA")
})