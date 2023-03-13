// import React from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

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

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

// Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }


  return (
      <div className="container">
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          {showAddTask && <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
      </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello From a calss</h1>
//   }
// }

export default App;
