import React, { lazy } from 'react';
import Idea from './components/Idea';
import Header from './components/Header';
import Projects from './components/Projects';
import Services from './components/Services';

const Home = () => {
    return (
        <>
            <Header/>
            <Projects/>
            <Services/>
            <Idea/>
        </>
    );
};

export default Home;
