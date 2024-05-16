import { Router } from 'express'
import { LoginUser } from '../controllers/Auth/auth.js'
import { registerUser, updateUser } from '../controllers/users.js'

export const authRouting = Router()

authRouting.get('/', LoginUser)


authRouting.post('/register', registerUser)

authRouting.patch('/:userID', updateUser)