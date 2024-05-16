// controllers/users.js

import { prismaDB } from '../db/connection.js';

export const registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const existingUser = await prismaDB.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    // Crear el usuario en la base de datos
    const newUser = await prismaDB.user.create({
      data: {
        email,
        password, // Aquí deberías cifrar la contraseña antes de almacenarla en la base de datos
        name,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.userID;
    // Aquí puedes procesar los datos del usuario actualizados enviados en el cuerpo de la solicitud
    // y actualizarlos en la base de datos utilizando Prisma
    res.send("ACTUALIZANDO USUARIO");
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
};
