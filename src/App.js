import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css'
import Todo from './components/Todo';
// import Display from './components/Display';
import { useState } from 'react';

function App() {

  const [todo, settodo] = useState("")
  const [description, setdescription] = useState("")
  const [allTask, setallTask] = useState([])
  const [editIndex, seteditIndex] = useState(0)
  const [editedobject, seteditedobject] = useState({})
  const [editedtodo, seteditedtodo] = useState("")
  const [editeddescription, setediteddescription] = useState("")

  const addTodo = () => {
    let newTask = {todo, description}
    setallTask([...allTask, newTask])
    // settodo("")   
    // setdescription("")
  }
  const del = (id) => {
    setallTask(allTask.filter((task, index)=> id != index))
  }
  const editTask = (i) => {
    let selectedTask = allTask[i]
    seteditedtodo(selectedTask.todo)
    setediteddescription(selectedTask.description)
    seteditIndex(i)
    seteditedobject(selectedTask)
  }
  const saveChanges = () => {
    let saveChanges = {todo:editedtodo, description:editeddescription}
    let newtask = [...allTask]
    newtask[editIndex] = saveChanges;
    setallTask(newtask)
  }
  return (
    <>
    <Todo settodo={settodo} setdescription ={setdescription} 
          addTodo={addTodo} setallTask={setallTask} allTask={allTask}
          delTask={del} editTask = {editTask} 
          editIndex = {editIndex} saveChanges = {saveChanges} editedobject ={editedobject} 
          editedtodo={editedtodo} editeddescription={editeddescription} setediteddescription={setediteddescription} seteditedtodo={seteditedtodo}/>

    </>
  );
}

export default App;
