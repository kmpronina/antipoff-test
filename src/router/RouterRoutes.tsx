import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "#store/store";
import { RouterLocationsEnum } from "./Router";
import ProtectedRoute, { ProtectedRouteProps } from "./ProtectedRoute";
import MainPage from "#pages/MainPage";
import AuthorizationPage from "#pages/AuthorizationPage";
import UserPage from "#pages/UserPage";

const RouterRoutes = () => {
  const authDataFromStorage = localStorage.getItem("authData");

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: !!authDataFromStorage,
    authenticationPath: RouterLocationsEnum.authorization,
  };

  return (
    <Routes>
      <Route path="">
        <Route
          path={RouterLocationsEnum.authorization}
          Component={() => <AuthorizationPage />}
        />

        <Route
          path={RouterLocationsEnum.main}
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<MainPage />}
            />
          }
        />

        <Route
          path={RouterLocationsEnum.user}
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<UserPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
