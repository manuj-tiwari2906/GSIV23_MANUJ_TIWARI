import { Spin } from "antd";
import React from "react";
import "./spinner.scss";

const Spinner = () => {
  return (
    <div className="spin-style">
      <Spin size="default" />
    </div>
  );
};

export default Spinner;
