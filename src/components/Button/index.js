import styles from './Button.module.css';

function Button({ name, width, onClick }) {
    return (
        <button className={styles.button} style={{ width }} onClick={onClick}>
            {name}
        </button>
    );
}

export default Button;
