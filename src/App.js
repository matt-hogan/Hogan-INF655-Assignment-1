// Matt Hogan
// INF 655 A
// Assignment 1

import './App.css';

function App() {
  const toDoList = [
    {
      id: 1,
      task: "office work"
    },
    {
      id: 2,
      task: "school work"
    },
    {
      id: 3,
      task: "clean"
    },
    {
      id: 4,
      task: "get groceries"
    }
  ];
  const myName = "Matt";

  return (
    <div className="App">
      <p className="random">Hello {myName} you have a task {toDoList[Math.floor(Math.random()*toDoList.length)].task} to finish.</p>
    </div>
  );
}

export default App;
