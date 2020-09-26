const router = require('express').Router(),
    controllers = require('../controllers/Operations');


/* GET home page. */
router.get('/', controllers.getTasks);

router.post('/create', controllers.createTask);

router.put('/update/:id', controllers.updateTask);

router.get('/done', controllers.getDoneTask);

router.get('/pending', controllers.getPendingTask);

router.delete('/delete/:id', controllers.deleteTask);

module.exports = router;
