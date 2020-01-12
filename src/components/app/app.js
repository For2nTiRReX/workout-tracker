import React from 'react';
import AppTopBar from '../app-top-bar/app-top-bar';
import BottomNavigation from '../bottom-navigation/bottom-navigation';

import './../../styles/app.scss';

const App = () => {
    return (
        <div id="app-root-component">
            <AppTopBar />
            <div id="primary-container">
                {/* Тут будет основной контент */}


                <div class="profile-logo">
                    <img src="..//workout-tracker/public/img/SVG/user-check.svg"></img>
                    <div class="profile-user-name">
                        <p>UserName</p>
                        <p>Воркаутов: 6</p>
                    </div>
                </div>

                <p>Панель мониторинга</p>

                <div class="workout-week defolt-box">

                        <p>dsa</p>
                        <p>dsa</p>
                        <p>dsa</p>
                        <p>dsa</p>
                    
                </div>



                {/* Тут будет основной контент */}
            </div>
            <BottomNavigation />
        </div>
    );
}

export default App;