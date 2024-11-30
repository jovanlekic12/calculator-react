import Button from "./reusable components/Button";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, addOperation } from "../features/calc/calcSlice";
function Buttonss() {
  const dispatch = useDispatch();

  return (
    <div className="num__btn__div">
      <Button onClick={() => dispatch(addNumber(7))}>7</Button>
      <Button onClick={() => dispatch(addNumber(8))}>8</Button>
      <Button onClick={() => dispatch(addNumber(9))}>9</Button>
      <Button onClick={() => dispatch(addOperation("/"))}>/</Button>
      <Button onClick={() => dispatch(addNumber(4))}>4</Button>
      <Button onClick={() => dispatch(addNumber(5))}>5</Button>
      <Button onClick={() => dispatch(addNumber(6))}>6</Button>
      <Button>*</Button>
      <Button onClick={() => dispatch(addNumber(1))}>1</Button>
      <Button onClick={() => dispatch(addNumber(2))}>2</Button>
      <Button onClick={() => dispatch(addNumber(3))}>3</Button>
      <Button>-</Button>
      <Button onClick={() => dispatch(addNumber("."))}>.</Button>
      <Button onClick={() => dispatch(addNumber(0))}>0</Button>
      <Button>=</Button>
      <Button onClick={() => dispatch(addOperation("+"))}>+</Button>
    </div>
  );
}

export default Buttonss;
