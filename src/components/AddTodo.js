import React from 'react'

const AddTodo = ({addTodo}) => {
  return (
    <div>
        <button className="btn bg-info mt-3 rounded-pill" onClick={addTodo}><b>Add Task</b></button>
    </div>
  )
}

export default AddTodo