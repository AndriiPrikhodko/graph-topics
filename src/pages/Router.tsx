import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './LoginPage';
import Graph from './GraphPage';

const routes = [
    { path: '/', component: <Login /> },
    { path: '/login', component: <Login /> },
    { path: '/graph', component: <Graph /> },
];

const RouteComponents = routes.map(({path, component}, key) => 
  <Route path={path} element={component} key={key} />
);


export default RouteComponents;
