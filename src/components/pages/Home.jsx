import React, { useEffect } from 'react';
import UseTitle from '../UseTitle';
import Banner from '../Banner/Banner';
import Gadgets from './Gadgets/Gadgets';

const Home = () => {
    UseTitle("Home |")
    return (
        <div>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;