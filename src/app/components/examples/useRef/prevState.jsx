import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const [otherState, setOtherState] = useState(0);
    const prevSate = useRef("");
    useEffect(() => {
        prevSate.current = otherState;
    }, [otherState]);
    const rerender = () => {
        setOtherState(prev => prev + 1);
    };
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <button className="btn btn-primary" onClick={rerender}>
                Счет
            </button>
            <p>`{otherState}`</p>
            <p>`{prevSate.current}`</p>
        </CardWrapper>
    );
};

export default PrevStateExample;
