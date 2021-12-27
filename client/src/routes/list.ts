import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404';
import Auth from '../providers/Auth';

export const routes = [
    {
       path: '/',
       auth: true,
       component: '<Home />' 
    },
    {
        path: '*',
        auth: true,
        component: Error404
     },
     {
        path: '/login',
        auth: false,
        component: Auth
     },
]