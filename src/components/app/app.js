import React from 'react';
import AppTopBar from '../app-top-bar/app-top-bar';
import BottomNavigation from '../bottom-navigation/bottom-navigation';

import './../../styles/app.scss';

const App = () => {
    return (
        <div id="app-root-component">
            <AppTopBar />
                <div id="primary-container">
                    Hello from app component!
                    {/* Тут будет основной контент */}

                    {/* Тут будет основной контент */}
                </div>
            <BottomNavigation />
        </div>
    );
}

export default App;