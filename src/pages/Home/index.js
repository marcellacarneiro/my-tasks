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
                    return (
                        <ItemList
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            status={task.status}
                            toggleStatus={() => toggleTaskStatus(task.id)}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default Home;