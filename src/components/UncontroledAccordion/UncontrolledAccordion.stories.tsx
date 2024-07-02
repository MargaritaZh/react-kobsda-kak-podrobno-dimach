import React from "react";
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title:"UncontrolledAccordion stories",
    component: UncontrolledAccordion,
};

//чтобы работала вкладка action экспортируем action
// const callback=action("change")
//===============
//сами stories


export const ModeChanging = () => {

    return <UncontrolledAccordion titleValue={"Users"}/>
};