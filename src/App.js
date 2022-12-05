import Navbar from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="nav-area">
          <a href="/#" className="logo">
            CodeSolution{" "}
          </a>{" "}
          <Navbar />
        </div>{" "}
      </header>
    </div>
  );
}
