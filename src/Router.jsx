import * as React from "react";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import './styles/css/styles.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App