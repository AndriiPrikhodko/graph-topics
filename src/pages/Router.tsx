import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Login from './LoginPage';
import Graph from './GraphPage';

const isAuthenticated = () => !!localStorage.getItem('token')

const ProtectedRoute = ({ children }: {children: React.ReactElement}) => {
  debugger
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!isAuthenticated()) {
        navigate('/login');
      } else {
        setLoading(false);
      }
    }, [navigate]);
  
    
    if (loading) {
      return null; // or a loading spinner
    }

    return children;
  } 

  const routes = [
    { path: '/', component: <Login /> },
    { path: '/login', component: <Login /> },
    { path: '/graph', component: 
      <ProtectedRoute>
        <Graph/>
      </ProtectedRoute>},
];

const RouteComponents = routes.map(({path, component}, key) => 
  <Route path={path} element={component} key={key} />
);


export default RouteComponents;
