var express = require('express');
var router = express.Router();

/* GET users listing. */
/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
