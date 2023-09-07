import React, {lazy} from 'react';
import { PROJECTS } from 'Main/constants';
const Home = lazy(() => import('Pages/Home'));
const Case = lazy(() => import('Pages/Case'));
const NotFound = lazy(() => import('Pages/NotFound'));

const routes = [
    { path: '/', element: <Home /> , exact: true },
    ...PROJECTS.map(({ link }, i) => (
        { path: link, element: <Case id={i} /> }
    )),
    { path: '*', element: <NotFound /> },
];

export default routes;
