'use client'
import React, {useState, useEffect, memo, useCallback} from 'react';

interface IButtonProps {
    onClick: () => void
}
const App = () => {
    const [count, setCount] = useState(0);
    const increment = () => { //надо добавить useCallback чтоб не ререндерился button
        setCount(count + 1); // не будет работать с callBack тк значение мемоизируется (count) всегда будет 0
        console.log(count);
    };

    useEffect(() => {
        if (count > 3) {
            setCount(0);
        }

    }, []); //надо добавить count в зависимости чтоб работало


    const Title = () => {
        const [titleCount, setTitleCount] = useState(0)
        const incrementTitleCount = () => {
            setTitleCount(titleCount +  1)
        }
        console.count('title')
        return (
            <>
            <h2>Title count {titleCount}</h2>
                <button onClick={incrementTitleCount}>change title count</button>
            </>);
    };


    return (
        <div>
            <Title/>
            <p>{count}</p>
            <Button onClick={increment} />
        </div>
    );
};
export default App;


const Button = memo(({onClick}: IButtonProps) => {
    console.count('button')
    return <button onClick={onClick}>Change count</button>;
});


