import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}
                                onChange={props.onChange}
                />

                { !props.collapsed&&<AccordionBody/>}
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
    onChange:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>---{props.title}---</h3>
    // <h3 onClick={(event)=>props.onChange()}>---{props.title}---</h3>
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

