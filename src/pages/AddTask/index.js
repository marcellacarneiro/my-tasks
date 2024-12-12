import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { AlignJustify, Type } from 'lucide-react';
import TextArea from '../../components/TextArea';

function AddTask({ tasks, setTasks }) {
    const location = useLocation();
    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const [title, setTitle] = useState(location.state?.title ?? '');

    const handleAddTask = () => {
        // if (!title.trim()) return;

        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            status: 'pending',
        };

        setTasks([...tasks, newTask]);
        navigate('/');
    };

    return (
        <div>
            <Header />
            <Input
                width={'100%'}
                icon={<Type />}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title..."
            />
            <TextArea
                icon={<AlignJustify />}
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button name="Save Task" width="100%" onClick={handleAddTask} />
        </div>
    );
}

export default AddTask;
