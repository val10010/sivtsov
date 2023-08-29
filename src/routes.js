import React, {lazy} from 'react';
const Home = lazy(() => import('Pages/Home'));
const Case = lazy(() => import('Pages/Case'));
const NotFound = lazy(() => import('Pages/NotFound'));

const routes = [
    { path: '/', element: <Home /> , exact: true },
    { path: '/case/:caseId', element: <Case /> },
    { path: '*', element: <NotFound /> },
];

export default routes;
