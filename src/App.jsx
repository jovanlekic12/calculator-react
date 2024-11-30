import { useSelector, useDispatch } from "react-redux";
import Screen from "./components/Screen";
import Button from "./components/reusable components/Button";
import Buttonss from "./components/Buttons";
import { clearState, deleteNumber } from "./features/calc/calcSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <main className="main__container">
      <Screen></Screen>
      <div className="delete__btn__div">
        <Button onClick={() => dispatch(clearState())}>clear</Button>
        <Button onClick={() => dispatch(deleteNumber())}>delete</Button>
      </div>
      <Buttonss />
    </main>
  );
}

export default App;
