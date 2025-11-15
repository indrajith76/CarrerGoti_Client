import React from 'react';
import useAuth from '../context/useAuth';
import { Navigate } from 'react-router-dom';
import { ImSpinner2 } from "react-icons/im";


const Private = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        <ImSpinner2 className='animate-spin' />
    }
    if (!user && !loading) {
        return <Navigate to={"/"}></Navigate>;
    } else {
        return children;
    }
};

export default Private;
