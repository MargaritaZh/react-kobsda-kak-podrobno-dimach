import React, {useState} from 'react';
import './App.css'
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontroledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollabsed, setAccordionCollabsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState<boolean>(false)



    return (
        <div className={"App"}>

            <OnOff onChange={setSwitchOn} on={switchOn}/>


            {/*<OnOff/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            {/*<UncontrolledRating />*/}

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollabsed}
                       onChange={()=>setAccordionCollabsed(!accordionCollabsed)}/>

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            {/**/}

            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
