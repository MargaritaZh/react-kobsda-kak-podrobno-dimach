import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    title: "input",
    //component: OnOff,
};

export const UncontrolledInput = () => <input/>

export const TrackingValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actialValue = event.currentTarget.value
        setValue(actialValue)

    }
    return <><input onChange={onChange}/>{value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")


    const inputRef = useRef<HTMLInputElement>(null)


    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef} />
        <button onClick={save}>save
        </button>
        -action value: {value}</>
}


export const ControlledInput = () => {
    const[parentValue,setParentValue]=useState("")


    return <input value={parentValue} onChange={(e:ChangeEvent<HTMLInputElement>)=>setParentValue(e.currentTarget.value)}/>

}

export const ControlledCheckbox= () => {


}

export const ControlledSelect= () => {


}