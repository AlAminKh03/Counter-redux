import { connect } from "react-redux";
import { StateType, dispatchType } from "../redux/counter/counterTypes";
import { decrement, increment } from "../redux/counter/actions";
import {
  increment as dynamicIncrement,
  decrement as dynamicDecrement,
} from "../redux/dynamicCounter/actions";

type OwnPropsType = {
  dynamic: boolean;
};
interface CounterProps {
  count: number;
  increment: (value?: number) => void;
  decrement: (value?: number) => void;
}

interface ComponentProps extends CounterProps {
  dynamic?: boolean;
}

function Counter({ count, increment, decrement, dynamic }: ComponentProps) {
  const incrementHandler = () => {
    if (dynamic) {
      dynamicIncrement(5);
    } else {
      increment();
    }
  };
  const decrementHandler = () => {
    if (dynamic) {
      dynamicDecrement(2);
    } else {
      decrement();
    }
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={incrementHandler}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrementHandler}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: StateType, ownProps: OwnPropsType) => {
  if (ownProps.dynamic) {
    return {
      count: state.dynamicCounter.value,
    };
  } else {
    return {
      count: state.counter.value,
    };
  }
};

const mapDispatchToProps = (dispatch: dispatchType, ownProps: OwnPropsType) => {
  if (ownProps.dynamic) {
    return {
      increment: (value: number) => dispatch(dynamicIncrement(value)),
      decrement: (value: number) => dispatch(dynamicDecrement(value)),
    };
  } else {
    return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
    };
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
