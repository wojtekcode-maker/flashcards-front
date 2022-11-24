import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  user: {};
}

export const PrivateRoute = ({user}: Props) => {
    return Object.keys(user).length !== 0 ? <Outlet /> : <Navigate to="/login" />;
}