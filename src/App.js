import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount, increment, decrement } from './redux/slice/counterSlice';
import { itemIncrement, itemDecrement } from './redux/slice/itemCounterSlice';
import DisplayCount from './components/displayCount';
import DisplayItemCounter from './components/displayItemCounter';

function App() {

  const dispatch = useDispatch()
  return (
    <div className="body-content">
      <DisplayCount></DisplayCount>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="direct value"
          onClick={() => dispatch(incrementByAmount(20))}
        >
          Direct value 20
        </button>

        <hr />
        <h2>Item Counter</h2>
        <DisplayItemCounter></DisplayItemCounter>
        <div>
          <label>Item Increment</label>
          <button onClick={() => dispatch(itemIncrement())}> Add Item</button>
        </div>
        <div>
          <label>Item Decrement</label>
          <button onClick={() => dispatch(itemDecrement())}> Remove Item</button>
        </div>

      </div>
    </div>
  );
}

export default App;
