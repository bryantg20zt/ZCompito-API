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
    const { title, description, completed, dueDate } = req.body;

    const newTask = await prismaDB.task.create({
      data: {
        title,
        description,
        completed,
        dueDate,
        userId: parseInt(userId),
      },
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Failed to create task" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskID;
    const { title, description, completed, dueDate } = req.body;

    const updatedTask = await prismaDB.task.update({
      where: {
        id: parseInt(taskId),
      },
      data: {
        title,
        description,
        completed,
        dueDate,
      },
    });

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Failed to update task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskID;

    await prismaDB.task.delete({
      where: {
        id: parseInt(taskId),
      },
    });

    res.status(200).send("Tarea eliminada exitosamente");
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Failed to delete task" });
  }
};
