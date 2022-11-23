import './App.css';
import Navbar from "./My components/Navbar";
import { Todos } from "./My components/Todos";
import { Footer } from "./My components/Footer";
import { AddTodo } from './My components/AddTodo.';
// import { About } from './My components/About';
import React, { useState, useEffect } from "react";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }


  const onDelete = (todo) => {
    console.log("im on delete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.getItem("todos", JSON.stringify(todos));
  }


  let [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));


  }, [todos])

  const addTodo = (title, desc) => {
    console.log("i am adding this title and desc", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno,
      title,
      desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);


  }

  return (
    <>
        <Navbar title="Save Todo With Yash" seachBar={false}/>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            {/* <About /> */}


        <Footer />
    </>

  );
}

export default App;
