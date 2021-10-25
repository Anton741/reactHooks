import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <List>
                <Component />
                <Component />
                <Component />
            </List>
        </CollapseWrapper>
    );
};

// eslint-disable-next-line react/prop-types
const Component = ({ order }) => {
    return <div>{order} Компонент списка</div>;
};

export default ChildrenExercise;

const List = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const config = { ...child.props, order: index + 1 };
        return React.cloneElement(child, config);
    });
};
