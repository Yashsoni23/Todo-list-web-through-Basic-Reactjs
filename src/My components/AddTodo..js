import React, { useState } from 'react'

export const AddTodo = ({ addTodo }) => {
  const [title, SetTitle] = useState("");
  const [desc, SetDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and Description not should be Blank")
    } else {
      addTodo(title, desc)
      SetTitle("");
      SetDesc("");
    }
  }
  return (

    <div className='container'>
      <h3 className="text-center">Add Your Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Todo Title</label>
          <input type="text" value={title} onChange={(e) => { SetTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Todo Name" />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Todo Description</label>
          <input type="text" value={desc} onChange={(e) => { SetDesc(e.target.value) }} className="form-control" id="Description" placeholder="Enter Description" />
        </div>
        <div className="form-check">
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  )
}
