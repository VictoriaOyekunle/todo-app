import React   from 'react'
import AddTodo from './AddTodo'
import Display from './Display'

const Todo = ({settodo, setdescription, addTodo, allTask, setallTask, delTask, todo, 
  description, editTask, saveChanges, editIndex, editedobject, editedtodo, editeddescription, setediteddescription, seteditedtodo}) => {

  return (
    <>
    <div className="container-fluid bg-dark pt-5">
        <div className="row">
          <center>
          <div className="col-md-6">
                <h1 className='text-light'><b>TODOLIST</b></h1>
                <p className='text-info h4'>What are your plans for today?</p>
                <input type="text" className='form-control mt-4' placeholder='Add your task' onChange={(e)=>settodo(e.target.value)}/>
                <input type="text" className='form-control mt-2' placeholder='Task Description' onChange={(e)=>setdescription(e.target.value)}/>
                <AddTodo addTodo={addTodo}/>
                </div>
                {/* <hr className='text-light '/> */}
          </center>
          
          <Display allTask={allTask} setallTask={setallTask} delTask={delTask} editTask={editTask} saveChanges={saveChanges}
           editIndex= {editIndex} editedobject= {editedobject}  editedtodo={editedtodo} editeddescription={editeddescription}
            seteditedtodo={seteditedtodo} setediteddescription={setediteddescription}/>
            <small className='text-white text-center'>By: Victoria Oyekunle</small>
        </div>
    </div>
    </>
  )
}

export default Todo