import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Recipe, { loader as recipeLoader } from './src/route/Recipe';
import './index.css';
import Root from './src/components/Root';
import ErrorPage from './src/components/ErrorPage';
import Home from './src/route/Home';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Recipe />,
        loader: recipeLoader
      },
      {
        path: 'recipes/:mealType',
        element: <Recipe />,
        loader: recipeLoader,
      },
    ]
  },




]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
