import React, {useState} from 'react';
import './App.css'

import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollabsed, setAccordionCollabsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState<boolean>(false)


    return (
        <div className={"App"}>

            <OnOff onChange={setSwitchOn} on={switchOn}/>
            <Select value={'1'} onChange={()=>{}} items={[
                { value: '1', title: 'Minsk' },
                { value: '2', title: 'Moscow' },
                { value: '3', title: 'Kiev' },
            ]}/>

            {/*<UnControledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}

            {/*<OnOff/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            {/*<UncontrolledRating />*/}

            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={accordionCollabsed}*/}
            {/*           onChange={() => setAccordionCollabsed(!accordionCollabsed)}*/}
            {/*           items={["Dimach","Valera","Artem","Victor"]}*/}

            {/*/>*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>
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
