import './TaskCard.css'
import styles from './TaskCard.module.css';

export default function TaskCard({ task, handleDelete }) {
    return (
        <div className="taskcard">
            <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
                <span className={styles.title}>{task.id} - </span><span>{task.name}</span>
                <button className="delete" onClick={()=> handleDelete(task.id)}>Delete</button>
            </li>
        </div>
    )
}