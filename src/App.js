import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { mockDatabase } from './mockDatabase';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import Task from './pages/Task';

function App() {
    const [tasks, setTasks] = useState(mockDatabase.tasks);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            tasks={tasks}
                            setTasks={setTasks}
                            newTaskTitle={newTaskTitle}
                            setNewTaskTitle={setNewTaskTitle}
                        />
                    }
                />
                <Route path="/add-task" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
                <Route path="/task/:id" element={<Task tasks={tasks} />} />
            </Routes>
        </Router>
    );
}

export default App;
