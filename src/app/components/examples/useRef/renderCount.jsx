import React, { useState, useRef, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    console.log("rerending");
    const [otherState, setOtherState] = useState(0);
    const countRendering = useRef(0);
    useEffect(() => {
        countRendering.current++;
    });

    const rerender = () => {
        setOtherState(!otherState);
    };
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <p>{countRendering.current}</p>
            <button className="btn btn-primary" onClick = {rerender}>Счет</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
