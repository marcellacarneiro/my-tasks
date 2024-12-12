import styles from './TextArea.module.css';

function TextArea({ icon, value, onChange, placeholder }) {
    return (
        <div className={styles.textAreaContainer}>
            <span>{icon}</span>
            <textarea value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    );
}

export default TextArea;
