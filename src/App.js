import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';

function App() {
    const mockDatabase = {
        tasks: [
            { id: 1, title: 'Task 1', description: 'Task 1 description', status: 'pending' },
            { id: 2, title: 'Task 2', description: 'Task 2 description', status: 'done' },
            { id: 3, title: 'Task 3', description: 'Task 3 description', status: 'done' },
            { id: 4, title: 'Task 4', description: 'Task 4 description', status: 'pending' },
            { id: 5, title: 'Task 5', description: 'Task 5 description', status: 'done' },
        ],
    };
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
            </Routes>
        </Router>
    );
}

export default App;
