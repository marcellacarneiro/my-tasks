import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import ItemList from '../../components/ItemList';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom'

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
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    }

    return (
        <>
            <Header />
            <div className="inputButtonContainer">
                <Input
                    width={'73%'}
                    icon={<Plus />}
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder={'Title...'}
                />
                <Button name={'Add Task'} width={'25%'} onClick={handleNavigateToAddTask} />
            </div>
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
        </>
    );
}

export default Home;