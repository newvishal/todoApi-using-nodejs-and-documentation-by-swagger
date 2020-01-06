const todoService = require('../../services/todo')
/**
 * @swagger
 * /todo/{id}:
 *    delete:
 *      tags:
 *       - Todo
 *      summary: Delete todo
 *      description: delete todo by id
 *      consumes:
 *       - application/json
 *      produces:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         description: ID of todo
 *         required: true
 *         type: string
 *      responses:
 *           "200":
 *              description: successful operation
 *           "500":
 *              description: database error
 * 
 */
module.exports = async function removeTodoByid(req, res, next) {
    try {
        const id = req.params.todoId;
        const deletedTodo = await todoService.deleteTodo(id);
        console.log()
        res.status(200).json({
            message: 'Todo deletd Successfully',
            todo: deletedTodo
        })
        next();
    } catch (e) {
        res.status(500).json({
            message: 'Somthing went wrong'
        })
        next();
    }
}