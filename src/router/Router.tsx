import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "./RouterRoutes";

export enum RouterLocationsEnum {
  main = "/",
  authorization = "/authorization",
  user = "/user/:userId",
}

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes />
    </BrowserRouter>
  );
};

export default Router;
