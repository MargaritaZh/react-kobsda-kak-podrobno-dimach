import {useEffect, useState} from "react";
import {clearInterval} from "node:timers";

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        debugger
        console.log("useEffect every render component")
        document.title = counter.toString()
        //api.getUsers().them("")
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title="User"
    })

    useEffect(() => {
        debugger
        console.log("useEffect only first render")
        document.title = counter.toString()

        //api.getUsers().them("")
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title="User"
    }, [])

    useEffect(() => {
        debugger
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()

        //api.getUsers().them("")
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title="User"
    }, [counter])

    return <>
        Hello,{counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}


export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    //ПОМЕНЯЙ TITLE ВСЕГО ОДИН РАЗ,КОГДА КОМПАНЕНТА ВМОНТИРОВАЛАСЬ

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("SetTimeOut")
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("SetTimeOut")
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])


    useEffect(() => {
        const indervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(indervalId)
        }
    }, [])

    return <>
        Hello,counter:{counter}, fake: {fake}

        {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
    </>
}


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log("component rendered")

    useEffect(() => {
        console.log("Effect occurred" + counter)

//сбросить эффект ,вернуть другую фунцию ,которая это сделает
        return () => {
            console.log("reset effect" + counter)
        }

    }, [counter])


    const increase = () => setCounter(counter + 1)


    return <>
        Hello,counter:{counter}
        <button onClick={increase}>+</button>
    </>

}

export const KeyTrackerExample = () => {

    const [text, setText] = useState("")

    console.log("Component rendered with" + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }

        window.document.addEventListener("keypress", handler)

        //сбросить эффект ,вернуть другую фунцию ,которая это сделает

        return () => {
            window.removeEventListener("keypress", handler)
        }

    }, [text])


    return <>
        Type text:{text}

    </>

}


export const SetTimeoutExample = () => {

    const [text, setText] = useState("")

    console.log("Component rendered with" + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log("timeout expared")
            setText("3 second passed")
        }, 3000)

        //сбросить эффект ,вернуть другую фунцию ,которая это сделает

        return () => {
            clearTimeout(timeoutId)
        }

    }, [text])


    return <>
        Type text:{text}

    </>

}
