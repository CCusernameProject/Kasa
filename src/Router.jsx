import * as React from "react";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Accommodation from './components/Pages/Accommodation';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: `/logement`,
        element: <Accommodation />,
    }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App