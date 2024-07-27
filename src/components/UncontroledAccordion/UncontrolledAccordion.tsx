import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

const TOGGLE_CONSTANT="TOGGLE-COLLAPSED"

type actionType = {
    type: string
}

const reducer = (state: boolean, action: actionType) => {

    switch (action.type){
        case TOGGLE_CONSTANT:
            return !state;
        default:
           throw new Error (
           "Bad action type")
    }

    // if (action.type === TOGGLE_CONSTANT) {
    //     return !state
    // }
    //
    // return state
}


export function UncontrolledAccordion(props: AccordionPropsType) {

// let [collapsed, setCollapsed]=useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}/>*/}

            {/*{!collapsed && <AccordionBody/>}*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type:TOGGLE_CONSTANT})
            }}/>

            {!collapsed && <AccordionBody/>}
        </div>
    )
}

// export function Accordion(props: AccordionPropsType) {
//     if (props.collapsed === true) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         )
//     }
// }


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}