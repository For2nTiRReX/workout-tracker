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

                {/* Первая страница НАЧАЛО */}
                <div class="profile-logo">
                    <img src="img/SVG/user-check.svg"></img>
                    <div class="profile-user-name">
                        <p>UserName</p>
                        <p>Воркаутов: 6</p>
                    </div>
                </div>

                <p>Панель мониторинга</p>

                <div class="workout-week defolt-box">

                    <p>Воркаут за неделю</p>
                    <p class="gray-lettering">Активность</p>
                    <p>График</p>
                    <p>График</p>
                    <p>График</p>


                </div>

                <div class="workout-day defolt-box">

                    <p>Ежедневный макрос</p>
                    <p class="gray-lettering">Питание</p>
                    <p>График</p>
                    <p>График</p>
                    <p>График</p>

                    <div class="pro-open"> Открыть график с PRO</div>


                </div>


                <div class="charts-analytics">
                <img src="img/SVG/pro-servise.svg"></img>

                    <p>Графики,аналитика и исследования</p>
                    
                    <p class="gray-lettering">Следите за вашей хронологией в 1 МП, упражняйтесь в общем поднятом 
                        весе или используйте лучшие наборы</p>
                    

                        <div class="pro-function"> Ознакомиться с PRO-функциями</div>
                </div>




                {/* Первая страница КОНЕЦ */}

                {/* Тут будет основной контент */}
            </div>
            <BottomNavigation />
        </div>
    );
}

export default App;