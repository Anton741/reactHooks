import React, { useState } from "react";
const withAuth = (Component) => (props) => {
  const [isLogin, setIsLogin] = useState();
  // const isAuth = localStorage.getItem("user");
  const onLogIn = () => {
    localStorage.setItem("user", {});
    setIsLogin(localStorage.getItem("user"));
  };
  const onLogOut = () => {
    localStorage.removeItem("user");
    setIsLogin(localStorage.getItem("user"));
  };
  // return (
  //     <>
  //         {!isAuth ? (
  //             <Component {...props} nameBtn="Войти" onLog = {onLogIn}/>
  //         ) : (
  //             <Component {...props} nameBtn="Выйти из системы" onLog = {onLogOut} />
  //         )}{" "}
  //     </>
  // );
  return (
      <>
          <Component isAuth = {isLogin} onLogIn = {onLogIn} onLogOut = {onLogOut}></Component>
      </>
  );
};
export default withAuth;
