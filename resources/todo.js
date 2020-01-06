const  mongoose =require('mongoose');
const { Schema } = mongoose;
const todoSchema = new Schema({
    work: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'false',
        enum: ['true', 'false']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', todoSchema, 'Todos');
module.exports = Todo;