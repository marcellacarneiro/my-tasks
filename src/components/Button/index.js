import styles from './Button.module.css';

function Button({ title, width, onClick }) {
    return (
        <button className={styles.button} style={{ width }} onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;
