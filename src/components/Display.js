import React from 'react'
import AddTodo from './AddTodo'
import ModalBox from './ModalBox'

const Display = ({allTask, delTask, setallTask, editTask, editIndex, settodo, setdescription,
   description, todo, saveChanges, editedobject, editeddescription, editedtodo, setediteddescription, seteditedtodo}) => {
  return (
    <>
    <div className="container-fluid mt-2 position-relative">
      <div className="row">
        {/* <center> */}
        <div className="col-md-6 mx-auto py-3">
          <ul>
          {
          allTask.map((task, index)=> (
           <li className='text-info' key={index}> 
           <div className="card border border-right border-right-danger mt-2 shadow">
              <table>
               <thead>
               <tr className='bg-info'>
                  <td>
                  <h5 className='px-2 text-dark'>{task.todo}</h5>
                  </td>
                </tr>
               </thead>
               <tbody>
               <tr>
                  <td>
                    <p className='text-secondary px-2'>{task.description}</p>
                  </td>
                  <td className='position-absolute end-0 bottom-0'>
                  {/* <AddTodo name="Delete" color="btn btn-danger btn-sm"/>  */}
                  {/* <AddTodo name="Edit" color="btn btn-warning btn-sm"/>  */}
                    <button className='btn btn-danger btn-sm mx-2 rounded-pill' onClick={()=>delTask(index)}>Delete</button>
                  <button className='btn btn-warning btn-sm mx-2 px-3 rounded-pill'data-bs-toggle="modal" data-bs-target="#exampleModal"
                  onClick={()=>editTask(index)}>Edit</button>
                  </td>
                </tr>
               </tbody>
              </table>
            </div>
           </li>
          ))
         }
          </ul>
          <ModalBox editIndex = {editIndex} settodo = {settodo} setdescription = {setdescription} todo= {todo} 
          description = {description} saveChanges={saveChanges} editedobject= {editedobject}
          editedtodo={editedtodo} editeddescription={editeddescription} setediteddescription={setediteddescription} seteditedtodo={seteditedtodo}/>
        </div>
       
        {/* </center> */}
      </div>
    </div>
    </>
  )
}

export default Display