import express from 'express'
import Column from '../models/column.js'
const columnsRouter = express.Router()

columnsRouter.post('/', async (req, res) => {
    if (!req.body.name) {
      res.status(400).send('Missing name parameter');
      return;
    }
  
    const id = await Column.create(req.body.name);
    res.status(201).json({ id });
  });
  
columnsRouter.get('/', async (req, res) => {
    const columns = await Column.getAll();
    res.status(200).json(columns);
  });
  
columnsRouter.get('/:id', async (req, res) => {
    const column = await Column.getById(req.params.id);
    if (!column) {
      res.status(404).send('Column not found');
      return;
    }
  
    res.status(200).json(column);
  });
  
columnsRouter.put('/:id', async (req, res) => {
    const column = await Column.getById(req.params.id);
    if (!column) {
      res.status(404).send('Column not found');
      return;
    }
  
    column.name = req.body.name;
    await column.update();
    res.status(200).send();
  });
  
columnsRouter.delete('/:id', async (req, res) => {
    const column = await Column.getById(req.params.id);
    if (!column) {
      res.status(404).send('Column not found');
      return;
    }
  
    await column.delete();
    res.status(200).send();
  });

export default columnsRouter