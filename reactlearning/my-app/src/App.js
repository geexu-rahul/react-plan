import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import React, { useState } from 'react';
import { AddTodo } from './components/AddTodo';



function App() {

  const [todos, setTodos] = useState(
    [
      { sno: 1, title: "Assignment One" },
      { sno: 2, title: "Assignment Two" },
      { sno: 3, title: "Assignment Three" },
      { sno: 4, title: "Assignment Four" },
    ]
  );

  

  



  const onDelete = (a) => {
    
    var b = todos.filter(function (e) {
      return e.sno !== a.no
  });
  setTodos(b)
  }
  const  atd = (title) => {
    let sno = (todos.length >0) ? todos[todos.length -1].sno +1 : 1; 
    
    console.log(sno)
    let myTodo = {
      sno : sno,
      title: title
    }
    setTodos([...todos, myTodo])
    
  }

  return (
    <>
      <Header title="My Todos List " />
      <div className='row my-5'>
          <div className='col-8'>
          <Todos todos={todos} onDelete={onDelete} />
          </div>
          <div className='col-4'>
            <AddTodo atd={atd}  />
          </div>
      </div>
      
      <Footer />
    </>
  );
}

export default App;
