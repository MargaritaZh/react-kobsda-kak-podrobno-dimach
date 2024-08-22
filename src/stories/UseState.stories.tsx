import React, {useMemo, useState} from "react";

export default {
    title: "UseState demo",

}

function generateData() {
    //difficult counting
    console.log("generateData")
    return 3285445662
}

export const Example1 = () => {
    console.log("Example1")

    const initValue = useMemo(generateData, [])

    // const [counter, setCounter] = useState(initValue)

//1-ая особенность . Если есть тяжелый подсчет
    //REACT, именно useState вызовет эту функцию один раз и запомнит в качестве инициализационного значения результат выхова фунции
    const [counter, setCounter] = useState(generateData)

    return (
        <>
            <button onClick={() =>
                setCounter(counter + 1)
            }>+
            </button>
            {counter}
        </>
    )
}

