const createService = require('../../services/todo');
/**
 * @swagger
 * /todo:
 *    post:
 *      tags:
 *       - Todo
 *      summary: Add a new todo
 *      description: Returns a all todo
 *      consumes:
 *       - application/json
 *      produces:
 *       - application/json
 *      parameters:
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
module.exports = async function todoCreateView(req, res, next){
    try {
        const todoData = Object.assign({}, req.body);
        await createService.create(todoData);
        res.status(200).json({
            message: "Todo are created successfully"
        });
        next();
    } catch (e) {
        res.status(500).json({
            mesage : 'Somthing went wrong',
            error: e
        });
        next(res);
    }
}