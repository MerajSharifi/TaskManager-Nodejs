const express = require(`express`)
const router = express.Router()

const {getAllTasks, creatTasks, getTasks, updateTasks, deleteTasks,
} = require('../controllers/tasks')

router.route('/').get(getAllTasks)
module.exports = router