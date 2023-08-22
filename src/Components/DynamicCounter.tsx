import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../redux/counter/counterTypes";
import { decrement, increment } from "../redux/dynamicCounter/actions";

export default function DynamicCounter() {
  const count = useSelector<StateType, number>(
    (state: StateType) => state.dynamicCounter.value
  );

  const dispatch = useDispatch();

  const incrementHandler = (value: number) => {
    dispatch(increment(value));
  };
  const decrementHandler = (value: number) => {
    dispatch(decrement(value));
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => incrementHandler(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrementHandler(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
