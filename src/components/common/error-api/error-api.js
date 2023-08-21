import { Button } from "antd";
import React from "react";
import "./error-api.scss";

const ErrorApi = () => {
  return (
    <div className="error-box">
      <div className="error-text">
        {"Something went wrong ! Please try Again"}
      </div>
      <Button onClick={() => window.location.reload()} type="primary">
        Refresh
      </Button>
    </div>
  );
};

export default ErrorApi;
