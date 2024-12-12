import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import './style.css';

function Task({ tasks }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const task = tasks.find((task) => task.id === Number(id));

    if (!task) {
        return <h2>Tarefa não encontrada</h2>;
    }

    const taskTitle = task.title ? task.title : '[Untitled]';

    return (
        <div className="container">
            <Header />
            {!task ? (
                <h2>Task not found</h2> 
            ) : (
                <>
                    <div className="titleContainer">
                        <h1>{taskTitle}</h1>
                        <hr />
                    </div>
                    <pre className="description">{task.description}</pre>
                    <div className="buttonContainer">
                        <Button name={'Voltar'} width={'100%'} onClick={() => navigate('/')}>
                            Voltar
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Task;
