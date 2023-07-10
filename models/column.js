import db from '../firebase.js'

class Column {
  constructor(name) {
    this.name = name;
  }

  static async create(name) {
    const columnRef = await db.collection('columns').add({
      name,
    });
    return columnRef.id;
  }

  static async getAll() {
    const columnsSnapshot = await db.collection('columns').get();
    const columns = [];
    columnsSnapshot.forEach((columnDoc) => {
      columns.push({ id: columnDoc.id, ...columnDoc.data() });
    });
    return columns;
  }

  static async getById(id) {
    const columnDoc = await db.collection('columns').doc(id).get();
    if (!columnDoc.exists) {
      throw new Error('Column not found');
    }
    return { id: columnDoc.id, ...columnDoc.data() };
  }

  async update() {
    await db.collection('columns').doc(this.id).update({
      name: this.name,
    });
  }

  async delete() {
    await db.collection('columns').doc(this.id).delete();
  }
}

export default Column;
