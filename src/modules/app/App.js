import { Counter, Step } from "./components";
import '../../App.css';
import { useSelector } from "../../store";

const App = () => {
  const counter = useSelector(state => state.counter);

  return (
     <>
         <Step />
         {(counter === 0 || counter < 5) && <Counter />}
     </>
  )
}

export default App;
