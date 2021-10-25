import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const changeStyleBlock = () => {
        changeBlock.current.style.height = "150px";
        changeBlock.current.style.width = "80px";
        changeBlock.current.innerHTML = "text";
    };
    const changeBlock = useRef();
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref = {changeBlock}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className = " btn btn-primary mt-3" onClick = {changeStyleBlock}>Изменить блок</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
