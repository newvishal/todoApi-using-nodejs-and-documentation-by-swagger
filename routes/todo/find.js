
const todoServ = require('../../services/todo');
/**
 * @swagger
 * /todo/{id}:
 *    get:
 *      tags:
 *       - Todo
 *      summary:  Find todo by ID
 *      description: Returns a single todo
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
module.exports = async function getTodoById(req, res, next){
    try {
        const todo = await todoServ.findById(req.params.id);
        res.status(200).json({
            message: "Todo get Successfully",
            data: todo
        });
        next();
    } catch (e) {
        res.status(500).json({
            message: "Somthing went wrong"
        });
        next()
    }
}