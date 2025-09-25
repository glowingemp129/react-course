import {useState} from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";
import './List.css';
import AddTask from "./AddTask";
import moduleStyles from './List.module.css';

export default function List(props) {
    const [tasks, setTasks] = useState([
        {id: 1561, name: "Learning Task 1", completed: true},
        {id: 1562, name: "Learning Task 2", completed: false},
        {id: 1563, name: "Learning Task 3", completed: false}
    ]);

    function handleDelete(id) {
        console.log(id);
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const [showTasks, setShowTasks] = useState(true);

    const styles = {
        color: showTasks ? "#2fda93" : "#c84d31",
        border: "1px solid",
        borderColor: showTasks ? "#2fda93" : "#c84d31",
        borderRadius: "5px",
        fontSize: "20px",
        padding: "10px",
    };

    return (
        <div className="tasklist">
            <AddTask />
            <h1 style={styles}>Tasks List {props.title} {props.subtitle}</h1>
            <ul>
                <button className={`trigger ${moduleStyles.trigger}`} onClick={() => setShowTasks(!showTasks)}>{showTasks ? "Hide" : "Show"}</button>
                { showTasks && tasks.map((task) => (
                    <TaskCard task={task} key={task.id} handleDelete={handleDelete} />
                ))}
            </ul>

            <BoxCard result="success">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </BoxCard>

            <BoxCard result="warning">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </BoxCard>

            <BoxCard result="alert">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis dolorem enim ipsam labore obcaecati optio quam reprehenderit voluptas voluptatum?</p>
            </BoxCard>
        </div>
    );
}