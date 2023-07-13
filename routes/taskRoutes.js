import express from 'express'
import Task from '../models/task.js'
const taskRouter = express.Router();

taskRouter.post('/', async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.columnId) {
    res.status(400).send('Missing title, description, or columnId parameter');
    return;
  }

  const id = await Task.create(req.body.title, req.body.description, req.body.columnId);
  res.status(201).json({ id });
});

taskRouter.get('/', async (req, res) => {
  const tasks = await Task.getAll();
  res.status(200).json(tasks);
});

taskRouter.get('/:id', async (req, res) => {
  const task = await Task.getById(req.params.id);
  if (!task) {
    res.status(404).send('Task not found');
    return;
  }

  res.status(200).json(task);
});

taskRouter.put('/:id', async (req, res) => {
  const task = await Task.getById(req.params.id);
  if (!task) {
    res.status(404).send('Task not found');
    return;
  }

  task.title = req.body.title;
  task.description = req.body.description;
  task.columnId = req.body.columnId;
  await task.update();
  res.status(200).send();
});

taskRouter.delete('/:id', async (req, res) => {
  const task = await Task.getById(req.params.id);
  if (!task) {
    res.status(404).send('Task not found');
    return;
  }

  await task.delete();
  res.status(200).send();
});

export default taskRouter;