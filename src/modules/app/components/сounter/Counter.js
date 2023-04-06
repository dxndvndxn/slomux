import { useSelector, useDispatch } from "../../../../store";
import { updateCounter } from "../../actionCreators";

export const Counter = () => {
    const counter = useSelector(state => state.counter);
    const stepSize = useSelector(state => state.stepSize);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(updateCounter(-stepSize))}>-</button>
            <span> { counter } </span>
            <button onClick={() => dispatch(updateCounter(stepSize))}>+</button>
        </div>
    );
};