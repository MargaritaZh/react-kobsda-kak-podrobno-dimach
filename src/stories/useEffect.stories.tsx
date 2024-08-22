import {useEffect, useState} from "react";

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {

   const [fake,setFake]=useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        debugger
        console.log("useEffect every render component")
        document.title=counter.toString()
        //api.getUsers().them("")
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title="User"
    })

    useEffect(() => {
        debugger
        console.log("useEffect only first render")
        document.title=counter.toString()

        //api.getUsers().them("")
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title="User"
    },[])

    useEffect(() => {
        debugger
        console.log("useEffect first render and every counter change")
        document.title=counter.toString()

        //api.getUsers().them("")
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title="User"
    },[counter])

    return<>
        Hello,{counter} {fake}
        <button onClick={()=>setFake(fake+1)}>+</button>
        </>
}

