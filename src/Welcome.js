import React, { Component } from "react";

const Welcome = (props) => {
  const { name } = props;
  return <h1>{`Hola ${name}`}</h1>;
};

export default Welcome;
