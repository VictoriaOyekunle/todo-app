import React, { useState } from 'react'

const ModalBox = ({settodo, todo, setdescription, description, editIndex, saveChanges, allTask,
   editedobject, editedtodo, editeddescription,setediteddescription, seteditedtodo}) => {

//  let todoModal = setmodaltodo(editedobject.settodo)
  return (
    <div>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Task{editIndex}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type="text" className='form-control' onChange={(e)=>seteditedtodo(e.target.value)} value={editedtodo} />
        <input type="text" className='form-control mt-2'  onChange={(e)=>setediteddescription(e.target.value)}value={editeddescription} />
      </div>
      {/* placeholder={allTask[editIndex].todo}
        onChange={(e)=> settodo(e.target.value)} value={todo}  */}
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={saveChanges}>Save changes</button>
      </div>
    </div>
  </div>
</div>/
    </div>
  )
}

export default ModalBox