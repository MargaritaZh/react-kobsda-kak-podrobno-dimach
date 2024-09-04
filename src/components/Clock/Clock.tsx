import {useEffect, useState} from "react";
import {clearInterval} from "node:timers";

type PropsType = {};


const getString = (num: number) => num < 10 ? "0" + num : num


export const Clock: React.FC<PropsType> = (props: PropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])


    return (
        <div>
            <span>{getString(date.getHours())}</span>
            :
            <span>{getString(date.getMinutes())}</span>
            :
            <span>{getString(date.getSeconds())}</span>
        </div>
    );
};