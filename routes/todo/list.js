
const todoService =require('../../services/todo');
/**
 * @swagger
 * /todo:
 *    get:
 *      tags:
 *       - Todo
 *      summary: get all todos
 *      description: Returns a all todo
 *      produces:
 *       - application/json
 *      responses:
 *           "200":
 *              description: successful operation
 *           "500":
 *              description: database error
 * 
 */
module.exports = async function getListOfTodos(req, res, next){
    try {
        const data = await todoService.getlist();
        res.status(200).json({
            message: 'Todos are get Successfully',
            todos: data
        })
        next();
    } catch (e) {
        res.status(500).json({
            message: 'Somthing went wrong'
        })
        next()
    }
}