import React from "react";
import CardWrapper from "../../common/Card";

const withPropsStyle = (Component) => (props) => {
  return (<CardWrapper>
    <Component {...props}/>
  </CardWrapper>);
};

export default withPropsStyle;
