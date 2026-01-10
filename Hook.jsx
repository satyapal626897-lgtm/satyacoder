import { useState } from "react";

function Hook() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    };

    const reset = () => {
        setCount(0)
    };
    return (
        <>
            <h2>Count {count}</h2>

            <button onClick={increment}>increment</button>

            <br></br><br></br>

            <button onClick={decrement} disabled={count === 0}>decrement</button>

            <br></br><br></br>

            <button onClick={reset} disabled={count === 0}>reset</button>

        </>
    );
}

export default Hook;
