import React, {useState} from "react";


type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(0)


    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
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
    // setValue:(value:number)=>void
    value:1|2|3|4|5
    setValue:(value:1|2|3|4|5)=>void

}
function Star(props: StarPropsType) {
    // if (props.selected === true) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }

    // return props.selected ? <span><b>star </b></span> : <span>star </span>

    // return <span onClick={()=>{props.setValue(5)}}>
    return <span onClick={()=>{props.setValue(props.value)}}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}
