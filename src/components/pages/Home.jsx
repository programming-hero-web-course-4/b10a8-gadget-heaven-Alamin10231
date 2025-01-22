import React, { useEffect } from 'react';
import UseTitle from '../UseTitle';
import Banner from '../Banner/Banner';

const Home = () => {
    UseTitle("Home |")
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;