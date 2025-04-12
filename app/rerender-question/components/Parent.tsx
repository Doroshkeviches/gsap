'use client'
import React, {useCallback, useState} from 'react';

interface Props {
    Child: React.ReactNode
}

function Parent(props: Props) {
    const [count, setCount] = useState(0);
    const Component = useCallback(() => {
        const [value, setValue] = useState(0)

        const handleClick = () => {
            setValue(p => p + 1)
        }
        return (
            <>
                <div>{value}</div>
                <button onClick={handleClick}>Component Click</button>
            </>
        )
    },[])
    return (
        <div> {/* Если id меняется, компонент пересоздаётся */}
            <Component/>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

export default Parent;