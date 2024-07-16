import React from "react";

type ItemType = {
    title: string
    value:any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick:(value:any)=>void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
            />

            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(event) => props.onChange()}>---{props.title}---</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => {
                return (
                    <li key={index}  onClick={()=>{props.onClick(i.value)}}>{i.title}</li>
                )
            })}
        </ul>
    )
}

