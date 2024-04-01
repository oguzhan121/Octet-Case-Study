import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Login = React.lazy(() => import("./pages/Auth/login"));
const Movies = React.lazy(() => import("./pages/Movies/index"));
const MovieDetail = React.lazy(() => import("./pages/MovieDetail/index"));
const NotFound = React.lazy(() => import("./pages/NotFound/notFound"));

const ProtectedRoute = ({ children }: { children: any }) => {
  const user = localStorage.getItem('user');

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return React.cloneElement(children);
};

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoute>
              <MovieDetail />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
