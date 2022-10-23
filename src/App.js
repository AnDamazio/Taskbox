import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Task
            task="Jogar"
            key={1}
            onArchiveTask={() => console.log("Oi")}
            onPinTask={() => console.log("Oi")}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
