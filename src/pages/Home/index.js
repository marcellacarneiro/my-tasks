import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import ItemList from '../../components/ItemList';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Home({ tasks, setTasks, newTaskTitle, setNewTaskTitle }) {
    const navigate = useNavigate();

    const handleNavigateToAddTask = () => {
        navigate('/add-task', { state: { title: newTaskTitle } });
        setNewTaskTitle('');
    };

    const toggleTaskStatus = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: task.status === 'done' ? 'pending' : 'done' } : task
            )
        );
    };

    const handleDeleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <div className='container'>
            <Header />
            <div className="inputButtonContainer">
                <Input
                    width={'73%'}
                    icon={<Plus />}
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder={'Title...'}
                />
                <Button title={'Add Task'} width={'25%'} onClick={handleNavigateToAddTask} />
            </div>
            {tasks.length === 0 ? (
                <div className="containerNoTasks">
                    <p>No tasks available.</p>
                    <p> Start by adding a new one!</p>
                </div>
            ) : (
                <ul>
                    {tasks.map((task) => {
                        const taskTitle = task.title ? task.title : '[Untitled]';
                        return (
                            <ItemList
                                key={task.id}
                                id={task.id}
                                title={taskTitle}
                                description={task.description}
                                status={task.status}
                                toggleStatus={() => toggleTaskStatus(task.id)}
                                deleteTask={() => handleDeleteTask(task.id)}
                            />
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default Home;
