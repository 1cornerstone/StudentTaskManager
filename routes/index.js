const router = require('express').Router(),
    controllers = require('../controllers/Operations');


/* GET home page. */
router.get('/', controllers.getTasks); // get all student task

router.post('/create', controllers.createTask); // add task

router.put('/update/:title', controllers.updateTask); //confirm  task by Title

router.get('/done', controllers.getDoneTask);// get all done task

router.get('/pending', controllers.getPendingTask);//get list of undone task

router.delete('/delete/:title', controllers.deleteTask);// delete task by title

module.exports = router;
