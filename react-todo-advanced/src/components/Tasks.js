import { useState } from 'react';

const Tasks = () => {
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
        <>
        {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
        ))}
        </>
    )
}

export default Tasks