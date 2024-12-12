import { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Input from './components/Input';
import ItemList from './components/ItemList';

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

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
        console.log(mockDatabase.tasks);
    };

    return (
        <>
            <Header />
            <div className="inputButtonContainer">
                <Input width={'73%'} icon={'+'} />
                <Button name={'Add Task'} width={'25%'} onClick={handleAddTask} />
            </div>
            <ul>
                {tasks.map((task) => {
                    return (
                        <ItemList
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            status={task.status}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default App;
