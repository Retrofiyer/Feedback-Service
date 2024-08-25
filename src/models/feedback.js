// models/feedbackModel.js
const { getDB } = require('../config/db');

const Feedback = {
  collectionName: 'feedbacks',

  async create(feedback) {
    const db = getDB();
    const result = await db.collection(this.collectionName).insertOne(feedback);
    return result.insertedId;
  },

  async findAll() {
    const db = getDB();
    return await db.collection(this.collectionName).find().toArray();
  },

  async findById(id) {
    const db = getDB();
    const ObjectId = require('mongodb').ObjectId;
    return await db.collection(this.collectionName).findOne({ _id: new ObjectId(id) });
  },
};

module.exports = Feedback;