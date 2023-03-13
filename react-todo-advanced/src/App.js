// import React from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        reminder: true,
    },
    {
        id: 2,
        text: "Grocery Store",
        reminder: false,
    },
    {
        id: 3,
        text: "Dentist Appointment",
        reminder: true,
    }
])


  return (
      <div className="container">
          <Header />
          <Tasks tasks={tasks}/>
      </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello From a calss</h1>
//   }
// }

export default App;
