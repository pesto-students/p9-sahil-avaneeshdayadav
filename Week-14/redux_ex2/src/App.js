import "./styles.css";

import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const steps = useSelector((state) => state.steps);
  const dispatch = useDispatch();

  const addStep = () => {
    dispatch({ type: "ADD_STEP" });
  };

  const resetStep = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="App container" style={{ margin: "8%" }}>
      <div>
        <h3>You have walked {steps} steps today.</h3>
      </div>
      <div style={{ margin: "2%" }}>
        <button className="btn btn-success" onClick={addStep}>
          Add a step
        </button>
      </div>
      <div>
        <button className="btn btn-success" onClick={resetStep}>
          Reset
        </button>
      </div>
    </div>
  );
}
