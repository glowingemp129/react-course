import './TaskCard.css'

export default function TaskCard({ task, handleDelete }) {
    return (
        <div className="taskcard">
            <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
                <span>{task.id} - {task.name}</span>
                <button className="delete" onClick={()=> handleDelete(task.id)}>Delete</button>
            </li>
        </div>
    )
}