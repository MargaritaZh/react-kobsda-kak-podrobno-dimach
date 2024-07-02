import React, {useState} from "react";
import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';


export default {
    component: Accordion,
};


//чтобы работала вкладка action
const onChangeHandler=action("onchange")

//===============
//сами stories

export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={true}
                      onChange={onChangeHandler}/>
};


export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={false}
                      onChange={() => {
                      }}/>
};

export const AccordionDemo = () => {

    const [collapsed, setCollapsed] = useState(false)

    return <Accordion titleValue={"Accordion Demo"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
};