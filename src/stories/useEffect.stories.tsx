import {useEffect, useState} from "react";

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


export const SetTimeoutExample = () => {
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
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
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
        console.log("Effect occurred"+ counter)

//сбросить эффект ,вернуть другую фунцию ,которая это сделает
        return ()=>{
            console.log("reset effect"+counter )
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

    console.log("Component rendered with"+text)

    useEffect(() => {

        const handler=(e:KeyboardEvent)=>{
            console.log(e.key)
            setText((state)=>state+e.key)
        }

            window.document.addEventListener("keypress",handler)

            //сбросить эффект ,вернуть другую фунцию ,которая это сделает

        return ()=>{
                window.removeEventListener("keypress",handler)
        }

    }, [text])



    return <>
       Type text:{text}

    </>

}
