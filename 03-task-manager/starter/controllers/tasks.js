const getAllTasks = (req, res) => {
    res.send('Gett all tasks')
}

const creatTasks = (req, res) => {
    res.send('Create task')
}

const getTasks = (req, res) => {
    res.send('Get single task')
}
const updateTasks = (req, res) => {
    res.send('Update task')
}
const deleteTasks = (req, res) => {
    res.send('Delete task')
}


module.exports = {
    getAllTasks, creatTasks, getTasks, updateTasks, deleteTasks,
}