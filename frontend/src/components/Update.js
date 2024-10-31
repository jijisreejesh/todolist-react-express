import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import indexcss from './index.module.css'
import { useNavigate } from 'react-router-dom';
function Update() {
  const [todo,setTodo]=useState({});
  const navigate=useNavigate()
  let {id}=useParams();
  useEffect(()=>{
    axios.get(`http://localhost:3005/todos/${id}`)
    .then((res)=>{
      setTodo(res.data)
    })
    .catch((err)=>{
      console.error('Server side error to retrieve data : '+err);
      
    })
  },[])
  const back=(()=>{navigate('/view')})
  const save=((id)=>{
    axios.put(`http://localhost:3005/todos/${id}`,todo)
    .then((res)=>{
      setTodo(res.data)
      alert('Task updated')
    })
    .catch((err)=>{console.log('Client side error.Not possible to update',err);
    })
  })
  return (
    <div className={indexcss.div}>
      {todo === '' ? (
        <p>No todos are matching</p>
      ) : (
        <form onSubmit={()=>save(todo._id)}>
          <h2 style={{textAlign:'center',paddingBottom:'20px',color:'red'}}>Update ToDo-List</h2>
          <label htmlFor="todo" id={indexcss.label}>
            Enter the task
          </label>
          <input
            type="text"
            id="todo"
            placeholder={todo.task}
            value={todo.task}
            onChange={(e) => setTodo({...todo,task:e.target.value})}
            required
          ></input>
          <section id={indexcss.section}>
            <label htmlFor="description" id={indexcss.label}>
              Description
            </label>
            <textarea id="description" cols="35" rows="6" value={todo.desc} onChange={(e)=>setTodo({...todo,desc:e.target.value})}></textarea>
          </section>
          <br />
          <label htmlFor="date" id={indexcss.label}>
            Enter the due Date
          </label>
          <input type="date" id="date" required value={todo.date} placeholder={todo.date} onChange={(e)=>setTodo({...todo,date:e.target.value})}></input>
          <br />
          <label htmlFor="dropdown" id={indexcss.label}>
            Select the category
          </label>
          <select id="dropdown" required value={todo.category} onChange={(e)=>setTodo({...todo,category:e.target.value})}>
            <option>Work</option>
            <option>Personal</option>
            <option>Shopping</option>
          </select>
          <button type="submit" className={indexcss.button}>
           Save
          </button>
          <button type="reset" className={indexcss.button} onClick={back}>
            back
          </button>
        </form>
      )}
    </div>
  )
}

export default Update