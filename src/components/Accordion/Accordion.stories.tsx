import React, {useState} from "react";
import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';


export default {
    title: "Accordion stories",
    component: Accordion,
};


//чтобы работала вкладка action экспортируем action
const callback = action("accordion node change event fired")
const onclickCallback = action("some item was clicked")


//===============
//сами stories

export const MenuCollapsedMode = () => {
    return <Accordion titleValue={"Menu"}
                      collapsed={true}
                      onChange={callback}
                      items={[]}
                      onClick={onclickCallback}
    />
};


export const UsersUnCollapsedMode = () => {
    return <Accordion titleValue={"Users"}
                      collapsed={false}
                      onChange={callback}
                      items={[{title: "Dimach", value: 1}, {title: "Valera", value: 2}, {
                          title: "Artem",
                          value: 2
                      }, {title: "Victor", value: 3}]}
                      onClick={onclickCallback}
    />
};

export const ModeChanging = () => {

    const [value, setValue] = useState(false)

    return <Accordion titleValue={"Accordion Demo"}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: "Dimach", value: 1},
                          {title: "Valera", value: 2},
                          {title: "Artem", value: 2},
                          {title: "Victor", value: 3}
                      ]}
                      onClick={(value) => {
                          alert(`users with ID ${value} should be happy`)
                      }}/>
};