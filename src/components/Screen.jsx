import { useDispatch, useSelector } from "react-redux";

function Screen() {
  // const dispatch = useDispatch();
  const { firstNumber, secondNumber, operation } = useSelector(
    (store) => store.calc
  );

  return (
    <div className="screen__container">
      <h1>
        {firstNumber}
        {operation}
      </h1>
      <h1>{secondNumber}</h1>
    </div>
  );
}

export default Screen;