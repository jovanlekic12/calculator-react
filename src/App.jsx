import { useSelector, useDispatch } from "react-redux";
import Screen from "./components/Screen";
import "./App.css";

function App() {
  // const dispatch = useDispatch();
  // const { firstNumber, secondNumber, operation } = useSelector(
  //   (store) => store.calc
  // );

  return (
    <main className="main__container">
      <Screen></Screen>
    </main>
  );
}

export default App;
