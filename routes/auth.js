import { Router } from 'express'
import { LoginUser } from '../controllers/Auth/auth.js'

export const authRouting = Router()

authRouting.get('/', LoginUser)


authRouting.post('/', (req, res) => {
  console.log(req.headers.authorization)
  res.send("REGISTRANDO USUARIO")
})

authRouting.patch('/:userID', (req,res) => {
  const userID = req.params.userID
  res.send("ACTUALIZANDO USUARIO")
})