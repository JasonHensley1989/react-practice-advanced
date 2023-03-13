// import React from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "March 15 - 230 p.m.",
        reminder: true,
    },
    {
        id: 2,
        text: "Grocery Store",
        day: "March 25 - 130 a.m.",
        reminder: false,
    },
    {
        id: 3,
        text: "Dentist Appointment",
        day: "March 13 - 945 p.m.",
        reminder: true,
    }
])

// Delete Task
  const deleteTask = (id) => {
    console.log('delete', id);
  }

  return (
      <div className="container">
          <Header />
          <Tasks tasks={tasks} onDelete={deleteTask}/>
      </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello From a calss</h1>
//   }
// }

export default App;
