import { createBrowserRouter } from 'react-router-dom';
import Layout from "../layout/Layout";
import Character from '../components/Character';
import CreateCharacter from '../components/CreateCharacter';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Character />
            },
            {
                path: "/characters",
                element: <Character />
            },
            {
                path: "/create-character",
                element: <CreateCharacter />
            },
            {
                path: "/edit-character/:id",
                element: <CreateCharacter />
            },
        ]
    }
]);