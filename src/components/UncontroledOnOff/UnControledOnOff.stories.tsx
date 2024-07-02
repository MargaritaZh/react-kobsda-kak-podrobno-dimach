import {action} from '@storybook/addon-actions';

import {UnControledOnOff} from "./UnControledOnOff";


export default  {
    title:"UnControledOnOff stories",
    component: UnControledOnOff,
};


const callback=action("on or off clicked")

export const OnMode=()=><UnControledOnOff defaultOn={true}  onChange={callback}/>

export const OffMode=()=><UnControledOnOff defaultOn={false} onChange={callback}/>


export const BugMode=()=><div>Unsync when change defaultValue when already rendered</div>
export const DefaultInputValue=()=><input defaultValue={"yo"}/>







