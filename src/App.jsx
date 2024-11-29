import { useSelector, useDispatch } from "react-redux";
import Screen from "./components/Screen";
import Button from "./components/reusable components/Button";
import Buttonss from "./components/Buttons";
import "./App.css";

function App() {
  // const dispatch = useDispatch();
  // const { firstNumber, secondNumber, operation } = useSelector(
  //   (store) => store.calc
  // );

  return (
    <main className="main__container">
      <Screen></Screen>
      <div className="delete__btn__div">
        <Button>clear</Button>
        <Button>delete</Button>
      </div>
      <Buttonss />
    </main>
  );
}

export default App;
