
const express = require('express');
const router = express.Router();
const create = require('./create');
const list = require('./list');
const getCtrl = require('./find')
const updateCtrl = require('./update');
const removeCtrl = require('./remove')



router.get('/', list);

router.post('/', create);       

router.get('/:id', getCtrl)

router.put('/:todoId', updateCtrl);

router.delete('/:todoId', removeCtrl);

module.exports = router;