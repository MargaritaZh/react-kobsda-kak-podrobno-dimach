import {useMemo, useState} from "react";

export default {
    title: "useMemo",
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resaltA = 1;
    let resaltB = 1;

    resaltA = useMemo(() => {
        let tempResult =1;

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResult = tempResult * i;
        }

        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resaltB = resaltB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Resalt for a:{resaltA}
        </div>
        <div>
            Resalt for b:{resaltB}
        </div>
    </>
}