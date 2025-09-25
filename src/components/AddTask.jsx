import './AddTask.css';

export default function AddTask() {
    return (
        <section className="addtask">
            <form>
                <label htmlFor="title">Task Name:</label>
                <input type="text" name="title" id="title" placeholder="Please Enter the Task Title" autoComplete="off" />
                <button type="submit">Add Task</button>
            </form>
        </section>
    )
}