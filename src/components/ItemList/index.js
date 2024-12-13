import { Clock, Check, Trash2 } from 'lucide-react';
import styles from './ItemList.module.css';
import { useNavigate } from 'react-router-dom';

function ItemList({ id, title, status, description, toggleStatus, deleteTask }) {
    const navigate = useNavigate();
    const handleOpenTaskDetails = () => {
        navigate(`/task/${id}`);
    };
    const taskIsDone = status === 'done';
    const StatusIcon = taskIsDone ? Check : Clock;

    return (
        <>
            <div className={styles.itemList}>
                <div onClick={handleOpenTaskDetails}>
                    <h2 style={{ textDecoration: taskIsDone ? 'line-through' : 'none' }}>{title}</h2>
                    <p className={styles.description} style={{ textDecoration: taskIsDone ? 'line-through' : 'none' }}>
                        {description}
                    </p>
                </div>
                <div className={styles.container}>
                    <div className={taskIsDone ? styles.done : styles.pending} onClick={toggleStatus}>
                        <StatusIcon className={styles.icon} />
                    </div>
                    <Trash2
                        style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                        onClick={deleteTask}
                    />
                </div>
            </div>
            <hr />
        </>
    );
}

export default ItemList;
