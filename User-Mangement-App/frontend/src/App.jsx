import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import UserList from './components/UserList'
import User from './components/User'
import AddUser from './components/AddUser'

function App() {
    const routerObj = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "adduser",
                    element: <AddUser />
                },
                {
                    path: "users-list",
                    element: <UserList />
                },
                {
                    path: "user",
                    element: <User />
                }
            ]
        }
    ])

    return <RouterProvider router={routerObj} />
}

export default App