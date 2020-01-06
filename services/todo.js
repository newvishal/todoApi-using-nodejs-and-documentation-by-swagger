
const Todo = require('../resources/todo');

exports.create = async function create(data) {
    try {
        const todo = new Todo(data);
        return await todo.save();   
    } catch (e) {
        throw new Error('error from database'+ e)
    }
};

exports.getlist = async function getList(){
    try {
        const todos = await Todo.find();
        return todos;
    } catch (e) {
        throw new Error('error from database'+ e)
    }
}

exports.findById = async function findById(id){
    try {
        const todo = await Todo.findById(id);
        return todo;
    } catch (e) {
        throw new Error('error from database'+ e)
    }
}

exports.updateTodo = async function updateTodo(id, data){
    try {
        const todo = await Todo.update({_id: id}, {$set: {work: data.work , status: data.status}});
        return todo;
    } catch (e) {
        throw new Error('error from database'+ e)
    }
}

exports.deleteTodo = async function deleteTodo(id){
    try {
        const todo = await Todo.remove({_id: id});
        return todo;
    } catch (e) {
        throw new Error('error from database'+ e)
    }
}
