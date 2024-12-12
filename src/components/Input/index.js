import styles from './Input.module.css';

function Input({ width, icon }) {
    return (
        <div style={{ width }} className={styles.inputContainer}>
            <span>{icon}</span>
            <input placeholder={'Title...'} />
        </div>
    );
}

export default Input;
