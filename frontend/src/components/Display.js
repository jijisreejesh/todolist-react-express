import React, { useEffect, useState } from "react";
import styles from "./display.module.css";
import {useNavigate} from 'react-router-dom'
import remove from '../remove.png';
import axios from "axios";
function Display() {
  const navigate=useNavigate();
  const [todo,setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/todos")
      .then((res) => {
        setTodo(res.data);
      })
      .catch((err) => {
        console.log("Error in frontend to display data: ", err);
      });
  }, []);
const back=()=>{
  navigate('/')
}
const deletehandle=(id)=>{
  axios.delete(`http://localhost:3005/todos/${id}`)
  .then((res)=>{
    console.log('deleted');
    setTodo(res.data);
  })
  .catch((err)=>{
    console.log("Error in deletion of data : ",err);
  })
}
const updatehandle=(id)=>{
  navigate(`/update_details/${id}`)
}
  return (
    <div className={styles.div}>
      {todo.length === 0 ? (
        <p>No tasks added</p>
      ) : (
        <ul>
          <section id={styles.section}><button id={styles.backbtn} onClick={back}>Go Back</button></section>
          {todo.map((i) => (
            <li key={i._id}>
              <strong onClick={()=>updatehandle(i._id)}>{i.task}</strong>
              <img src={remove} style={{width:'30px'}} onClick={()=>deletehandle(i._id)}></img>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Display;
