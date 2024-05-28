import React from "react";


type RatingPropsType = {
    // value: number
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value >0}/>
            <Star selected={props.value >1}/>
            <Star selected={props.value >2}/>
            <Star selected={props.value >3}/>
            <Star selected={props.value >4}/>
        </div>
    )

    //
    // if (props.value === 1) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 2) {
    //     return (
    //         <div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    //                   .......
    // return (
    //     <div>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //     </div>
    // )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}
