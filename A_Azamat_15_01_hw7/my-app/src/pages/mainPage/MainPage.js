import React, {useEffect, useState} from "react";

function MainPage () {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `Вы нажали ${count} раз`
    }, [count])

    const increment = () => {
        setCount(count +1)
        console.log(count)
    }

    const decrement = () => {
        setCount(count -1)
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}


export default MainPage;