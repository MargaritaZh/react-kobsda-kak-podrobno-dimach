import React, {useState} from "react";


type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(0)


    return (
        <div>
            <Star selected={value > 0} onClickHandler={() => {
                setValue(1)
            }}/>
            <Star selected={value > 1} onClickHandler={() => {
                setValue(2)
            }}/>
            <Star selected={value > 2} onClickHandler={() => {
                setValue(3)
            }}/>
            <Star selected={value > 3} onClickHandler={() => {
                setValue(4)
            }}/>
            <Star selected={value > 4} onClickHandler={() => {
                setValue(5)
            }}/>
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
    onClickHandler: () => void
}

// function Star(props: StarPropsType) {
//     if (props.selected === true) {
//         return <span><b>star </b></span>
//     } else {
//         return <span>star </span>
//     }
// }
function Star(props: StarPropsType) {
    const starStyle = {
        fontWeight: props.selected ? "bold" : "normal"
    }
    return (
        <span onClick={props.onClickHandler} style={starStyle}> star</span>
    )
}

