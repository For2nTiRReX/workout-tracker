import React from 'react';

const Profile = () => {
    return (
        <div>
            {/* начало Тут будет верхняя панель 250x400 iphone7 */}
            <div className="profile-logo">
                        <img src="img/SVG/user-check.svg" alt=""></img>
                        <div className="profile-user-name">
                            <p>UserName</p>
                            <p>Воркаутов: 6</p>
                        </div>
                    </div>

                    <p>Панель мониторинга</p>

                    <div className="workout-week defolt-box">

                        <p>Воркаут за неделю</p>
                        <p className="gray-lettering">Активность</p>
                        <p>График</p>
                        <p>График</p>
                        <p>График</p>


                    </div>

                    <div className="workout-day defolt-box">

                        <p>Ежедневный макрос</p>
                        <p className="gray-lettering">Питание</p>
                        <p>График</p>
                        <p>График</p>
                        <p>График</p>

                        <div className="pro-open"> Открыть график с PRO</div>


                    </div>


                    <div className="charts-analytics">
                    <img src="img/SVG/pro-servise.svg" alt=""></img>

                        <p>Графики,аналитика и исследования</p>
                        
                        <p className="gray-lettering">Следите за вашей хронологией в 1 МП, упражняйтесь в общем поднятом 
                            весе или используйте лучшие наборы</p>
                        

                            <div className="pro-function"> Ознакомиться с PRO-функциями</div>
                    </div>

            {/* конец Тут будет верхняя панель */}
        </div>
    );
}

export default Profile;