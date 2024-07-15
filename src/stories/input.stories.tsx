import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    title: "input",
    //component: OnOff,
};

export const UncontrolledInput = () => <input/>

export const TrackingValueOfControlledInputWith = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const actialValue=e.currentTarget.value
        setValue(actialValue)
    }}/>{value}</>
}

