import { Outlet } from "react-router-dom";
import BottomNav from "../components/Users/BottomNav/BottomNav";
import NavBar from "../components/Users/NavBar/NavBar";
import Home from "../pages/Users/Home/Home";
import { Children } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard/AdminDashboard";
import Login from "../pages/Admin/Login/login";
import UnProtectedLayout from "./UnProtectedLayout";
import ProtectedLayout from "./ProtectedLayout";
import AdminNavBar from "../components/Admin/AdminNavBar/AdminNavBar";
import AdminBottomBar from "../components/Admin/BottomNav/BottomNav";
import Updates from "../pages/Admin/Updates/Updates";
import Gallery from "../pages/Admin/Gallery/Gallery";

const UserLayout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <BottomNav/>
        </>
    )
}

const AdminLayout = () => {
    return (
        <>
            <AdminNavBar/>
            <Outlet/>
            <AdminBottomBar/>
        </>
    )
}


const routes = [
    {
        path: '/',
        element: <UserLayout/>,
        children: [
            {
                path : '/',
                element: <Home/>
            }
        ]
    },
    {
        path : 'admin',
        element : <AdminLayout/>,
        children : [
            {
                path : '/admin',
                element : 
                <ProtectedLayout>
                    <AdminDashboard/>
                </ProtectedLayout>
            },
            {
                path : '/admin/updates',
                element : 
                <ProtectedLayout>
                    <Updates/>
                </ProtectedLayout>
            },
            {
                path : '/admin/gallery',
                element : 
                <ProtectedLayout>
                    <Gallery/>
                </ProtectedLayout>
            },
        ]
    },
    {
        path : '/admin/login',
        element : 
        <UnProtectedLayout>
            <Login/>
        </UnProtectedLayout>

    }
]


export default routes
