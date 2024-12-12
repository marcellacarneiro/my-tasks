import styles from './Input.module.css';

function Input({ width, icon, value, onChange, placeholder }) {
    return (
        <div style={{ width }} className={styles.inputContainer}>
            <span>{icon}</span>
            <input value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    );
}

export default Input;
