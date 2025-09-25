import './App.css';
import {useState} from "react";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    // let count = 0;

    const [count, setCount] = useState(0);

    function handleAdd() {
        // count += 1;
        // console.log("Add", count);
        setCount(count + 1);
    }

    function handleSub() {
        // count -= 1;
        // console.log("SUB",count);
        setCount(count - 1);
    //     Doesn't matter How many times I do setCount(count - 1)
    //     It would bring change only once, until I pass it with the function
    //     setCount(count => count + 1) This will always take the updated value
    }

    function handleReset() {
        setCount(0);
    }

  return (
    <div className="App">
        <Header />
        <div className="box">
            <p>{count}</p>
            <button onClick={handleAdd} className="add" type="button">Add</button>
            <button onClick={handleSub} className="sub" type="button">Sub</button>
            <button onClick={handleReset} className="reset" type="button">Reset</button>
        </div>
        <List title="Random" subtitle="Test"/>

        <Footer />

    </div>
  );
}

export default App;
