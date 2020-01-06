
const todoService = require('../../services/todo');
/**
 * @swagger
 * /todo/{id}:
 *    put:
 *      tags:
 *       - Todo
 *      summary:  Update by ID
 *      description: Update single todo
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
 *       - in: body
 *         name: body
 *         description: Todo object that needs to be added
 *         required: true
 *         schema:
 *              type: object
 *              required:
 *                - status
 *                - work
 *              properties:
 *                  work:
 *                     type: string
 *                  status:
 *                     type: string
 *      responses:
 *           "200":
 *              description: successful operation
 *           "500":
 *              description: database error
 * 
 */
module.exports = async function updateTodo(req, res, next){
    try {
        const data = req.body;
        const id = req.params.todoId;
        const todoUpdate = await todoService.updateTodo(id, data);
        res.status(200).json({
            message: 'Todo Updated successfully',
            todo: todoUpdate
        });
        next();
    } catch (e) {
        res.status(200).json({
            message: 'Somthing Went wrong'
        });
        next();
    }
}