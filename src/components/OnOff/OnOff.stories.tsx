import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';
import {useState} from "react";

export default  {
    title:"OnOff stories",
    component: OnOff,
};

const callback=action("on or off clicked")

export const OnMode=()=><OnOff on={true} onChange={callback}/>

export const OfMode=()=><OnOff on={false} onChange={callback}/>

export const ModeChanging=()=>{
    const[value,setValue]=useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
}




