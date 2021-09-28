import { useSelector, useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";

const Display = () => {
  const result = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const numberAdd = () => {
    dispatch(addNumber(1));
  };

  const numberSub = () => {
    dispatch(subNumber(1));
  };

  return (
    <div className="contador">
      <h2>{result}</h2>
      <button onClick={numberAdd}>+</button>
      <button onClick={numberSub}>-</button>
    </div>
  );
};
export default Display;
