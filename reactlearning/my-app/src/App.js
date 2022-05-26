import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import React, { useState } from 'react';



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

  return (
    <>
      <Header title="My Todos List " />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
