/* eslint-disable react/prop-types */
import React from "react";

const SimpleComponent = ({ isAuth, onLogIn, onLogOut }) => {
return (
    <>
        {isAuth && (
            <button className="btn btn-primary" onClick={onLogOut}>
                {"Выйти из системы"}
            </button>
        )}
        {!isAuth && (
            <button className="btn btn-primary" onClick={onLogIn}>
                {"Войти"}
            </button>
        )}
    </>
);
};

export default SimpleComponent;
