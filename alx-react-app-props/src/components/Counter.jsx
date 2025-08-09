import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Counter: {count}</h2>
            <button style={{ margin: '5px', padding: '10px' }} onClick={() => setCount(count + 1)}>Increase</button>
            <button style={{ margin: '5px', padding: '10px' }} onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;