import { X, Check } from 'lucide-react';
import styles from './ItemList.module.css';

function ItemList({ title, status, description, toggleStatus }) {
    const taskIsDone = status === 'done';
    const Icon = taskIsDone ? Check : X;

    return (
        <>
            <div className={styles.itemList}>
                <div>
                    <h2 style={{ textDecoration: taskIsDone ? 'line-through' : 'none' }}>{title}</h2>
                    <p className={styles.description} style={{ textDecoration: taskIsDone ? 'line-through' : 'none' }}>
                        {description}
                    </p>
                </div>
                <div>
                    <div className={taskIsDone ? styles.done : styles.pending} onClick={toggleStatus}>
                        <Icon style={{ width: '17px' }} />
                        <p>{status}</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default ItemList;
