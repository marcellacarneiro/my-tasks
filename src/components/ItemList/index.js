import styles from './ItemList.module.css';

function ItemList({ title, status, description }) {
    return (
        <>
            <div className={styles.itemList}>
                <div>
                    <h2>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
                <div>
                    <div className={status === 'done' ? styles.done : styles.pending}>
                        <p>{status}</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default ItemList;
