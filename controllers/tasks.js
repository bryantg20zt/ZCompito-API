// controllers/tasks.js

import { prismaDB } from '../db/connection.js';

export const getTasksByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const tasks = await prismaDB.task.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
    res.json(tasks).status(200);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

export const createTask = async (req, res) => {
  try {
    const userId = req.params.userId;
    // Aquí puedes procesar los datos de la nueva tarea enviados en el cuerpo de la solicitud
    // y agregarlos a la base de datos utilizando Prisma
    res.send("AGREGANDO TAREA");
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Failed to create task" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskID;
    // Aquí puedes procesar los datos de la tarea actualizada enviados en el cuerpo de la solicitud
    // y actualizarlos en la base de datos utilizando Prisma
    res.send("ACTUALIZACION DE TAREA");
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Failed to update task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskID;
    // Aquí puedes eliminar la tarea correspondiente al ID proporcionado
    // en la base de datos utilizando Prisma
    res.send("COMPLETANDO TAREA");
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Failed to delete task" });
  }
};
