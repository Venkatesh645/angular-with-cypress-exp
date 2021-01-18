const express = require('express')
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const todoList = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

// get toDos
app.get('/todo/list', (req, res) => {
  return res.status(200).json({
    todoList
  })
})

// add todo
app.post('/todo/add', (req, res) => {
  const { todo: { desc } } = req.body;
  todoList.push({ id: Date.now(), desc });
  return res.status(200).json({
    message: 'Added successfully.'
  })
})

// delete todo by id
app.delete('/todo/delete/:id', (req, res) => {
  const { id } = req.params;
  const index = todoList.findIndex(d => d.id == id);
  if (index !== -1) {
    todoList.splice(index, 1);
    return res.status(200).json({
      message: 'Deleted successfully.'
    })
  } else {
    return res.status(200).json({
      message: 'Invalid todo id'
    })
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})