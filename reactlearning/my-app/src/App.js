import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {
  let todos = [
    { sno: 1, title: "Assignment One" },
    { sno: 2, title: "Assignment Two" },
    { sno: 3, title: "Assignment Three" },
    { sno: 4, title: "Assignment Four" },
  ]

  return (
    <>
      <Header title="My Todos List " />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
