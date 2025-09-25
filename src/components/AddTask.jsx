import './AddTask.css';
import {useState, useRef} from "react";

export default function AddTask({tasks, setTasks}) {
    // const [taskName, setTaskName] = useState('');
    const taskRef = useRef('');
    const [taskProgress, setTaskProgress] = useState(false);

    const handleChange = (e) => {
        // setTaskName(e.target.value);
    }

    const handleReset = () => {
        // setTaskName("");
        taskRef.current.value = '';
        setTaskProgress(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // if (!taskName) {
        //     alert("Please enter a task name");
        //     return;
        // }
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            name: taskRef.current.value,
            // name: taskName,
            completed: Boolean(taskProgress),
        };

        setTasks([...tasks, newTask]);
        handleReset();

        console.log("newTask",newTask);
    }

    return (
        <section className="addtask">
            <form>
                <input type="text" name="title" id="title" placeholder="Please Enter the Task Title" autoComplete="off" ref={taskRef} />
                {/*<input onChange={handleChange} type="text" name="title" id="title" placeholder="Please Enter the Task Title" autoComplete="off" value={taskName} />*/}
                <select onChange={(e) => setTaskProgress(e.target.value)}  value={taskProgress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <span className="reset" onClick={handleReset}>Reset</span>
                <button onClick={handleSubmit} type="submit">Add Task</button>
            </form>
            <p></p>
            {/*<p>{taskName}</p>*/}
        </section>
    )
}