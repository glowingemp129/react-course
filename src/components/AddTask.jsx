import './AddTask.css';
import {useState} from "react";

export default function AddTask() {
    const [taskName, setTaskName] = useState('');

    const handleChange = (e) => {
        setTaskName(e.target.value);
    }

    const handleReset = () => {
        setTaskName("");
    }
    return (
        <section className="addtask">
            <form>
                <input onChange={handleChange} type="text" name="title" id="title" placeholder="Please Enter the Task Title" autoComplete="off" value={taskName} />
                <button type="submit">Add Task</button>
                <span className="reset" onClick={handleReset}>Reset</span>
            </form>
            <p>{taskName}</p>
        </section>
    )
}