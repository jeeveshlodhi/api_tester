import './App.css';
import ApiRequest from './pages/api-call';
import Dashboard from './pages/dashboard';
import Settings from './pages/settings/settings';
import { setupGlobalKeybindings } from '@/lib/keybindings';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import GlobalDrawer from './global-ui/global-settings-model';
import GlobalSettingsModal from './global-ui/global-settings-model';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ApiRequest />,
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
    },
    {
        path: 'settings',
        element: <Settings />,
    },
]);

function App() {
    useEffect(() => {
        setupGlobalKeybindings();
    }, []);

    return (
        <>
            <GlobalDrawer />
            <GlobalSettingsModal />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
