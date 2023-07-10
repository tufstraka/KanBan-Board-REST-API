import db from '../firebase.js'

class Task {
    constructor(title, description, columnId) {
      this.title = title;
      this.description = description;
      this.columnId = columnId;
    }
  
    static async create(title, description, columnId) {
      const taskRef = await db.collection('tasks').add({
        title,
        description,
        columnId,
      });
      return taskRef.id;
    }
  
    static async getAll() {
      const tasksSnapshot = await db.collection('tasks').get();
      const tasks = [];
      tasksSnapshot.forEach((taskDoc) => {
        tasks.push({ id: taskDoc.id, ...taskDoc.data() });
      });
      return tasks;
    }
  
    static async getById(id) {
      const taskDoc = await db.collection('tasks').doc(id).get();
      if (!taskDoc.exists) {
        throw new Error('Task not found');
      }
      return { id: taskDoc.id, ...taskDoc.data() };
    }
  
    async update() {
      await db.collection('tasks').doc(this.id).update({
        title: this.title,
        description: this.description,
        columnId: this.columnId,
      });
    }
  
    async delete() {
      await db.collection('tasks').doc(this.id).delete();
    }
  }
  
  module.exports = Task;