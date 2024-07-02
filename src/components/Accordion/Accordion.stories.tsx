import React, {useState} from "react";
import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';


export default {
    title:"Accordion stories",
    component: Accordion,
};


//чтобы работала вкладка action экспортируем action
const callback=action("accordion node change event fired")

//===============
//сами stories

export const MenuCollapsedMode = () => {
    return <Accordion titleValue={"Menu"}
                      collapsed={true}
                      onChange={callback}/>
};



export const UsersUnCollapsedMode = () => {
    return <Accordion titleValue={"Users"}
                      collapsed={false}
                      onChange={callback}/>
};

export const ModeChanging = () => {

    const [value, setValue] = useState(false)

    return <Accordion titleValue={"Accordion Demo"}
                      collapsed={value}
                      onChange={()=>setValue(!value)}/>
};