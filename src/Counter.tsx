import React, { useState, useRef, useEffect } from 'react';

const Counter: React.FC<{}> = () => {
    const initialValue: any = 0;
    const [value, setValue] = useState<number>(initialValue);

    const increment = () => {
        setValue((prevState) => prevState + 1);
    };
    const decrement = () => {
        setValue((prevState) => prevState - 1);
    };

    const renderTimes = useRef(0);
    useEffect(() => {
        renderTimes.current = renderTimes.current + 1;
    });

    return (
        <div>
            <p>value: { value }</p>
            <button onClick={ increment }>+1</button>
            <button onClick={ decrement }>-1</button>
            <p>This components was re-renderes { renderTimes.current } times!</p>
        </div>
    );
}

export default Counter;
