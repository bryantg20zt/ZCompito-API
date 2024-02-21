import { Router } from 'express'

export const authRouting = Router()

authRouting.get('/', (req,res) => {
  res.send("VALIDANDO INICIO DE SESION")
})


authRouting.post('/', (req, res) => {
  res.send("REGISTRANDO USUARIO")
})

authRouting.patch('/', (req,res) => {
  res.send("ACTUALIZANDO USUARIO")
})