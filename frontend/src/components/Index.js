import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import indexcss from "./index.module.css";
import axios from "axios";
function Index() {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  // const[]
  const handleview = () => navigate("./view");
  const handleadd = (e) => {
    e.preventDefault();
    let details = {task,desc,date,category};
    
      axios
        .post("http://localhost:3005/todos", details)
        .then((res) => {
          console.log("task is : ", res.data);
          setTask("");
          setDesc('');
          setDate('')
          setCategory('');
        })
        .catch((err) => {
          console.error("Error : ", err);
        });
    
  };
  return (
    <div className={indexcss.div}>
      <form onSubmit={handleadd}>
        <label htmlFor="todo" id={indexcss.label}>
          Enter the task
        </label>
        <input
          type="text"
          id="todo"
          placeholder={task}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        ></input>
        <section id={indexcss.section}>
          <label htmlFor="description" id={indexcss.label}>
            Description
          </label>
          <textarea id="description" cols="35" rows="6" value={desc} onChange={(e)=>setDesc(e.target.value.trim())}></textarea>
        </section>
        <br />
        <label htmlFor="date" id={indexcss.label}>
          Enter the due Date
        </label>
        <input type="date" id="date" required value={date} onChange={(e)=>setDate(e.target.value)}></input>
        <br />
        <label htmlFor="dropdown" id={indexcss.label}>
          Select the category
        </label>
        <select id="dropdown" required value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option>Work</option>
          <option>Personal</option>
          <option>Shopping</option>
        </select>
        <button type="submit" className={indexcss.button}>
          Add
        </button>
        <button className={indexcss.button} onClick={handleview}>
          View All Tasks
        </button>
      </form>
    </div>
  );
}
export default Index;
