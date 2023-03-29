import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: String,
  done: Boolean
})

const Task = mongoose.model('Task', TaskSchema)

export default Task
