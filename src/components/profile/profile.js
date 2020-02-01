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

                <div className="name-plus-option">

                    <div>
                        <h4>Тренеровки за неделю </h4>
                    </div>

                    <div className="three-dots-menu">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
                <div>Активность</div>
                <p>График</p>
                <p>График</p>
                <p>График</p>

            </div>

            <div className="workout-day defolt-box">

                <div className="name-plus-option">

                    <div>
                        <h4>Ежедневный макрос </h4>
                    </div>

                    <div className="three-dots-menu">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
                <div>Питание</div>
                <p>График</p>
                <p>График</p>
                <p>График</p>

                <div className="pro-open"> Открыть график с PRO</div>


            </div>


            <div className="charts-analytics defolt-box">
                <img src="img/SVG/pro-servise.svg" alt=""></img>

                <h4>Графики,аналитика и исследования</h4>

                <p >Следите за вашей хронологией в 1 МП, упражняйтесь в общем поднятом
                            весе или используйте лучшие наборы</p>


                <div className="pro-function"> Ознакомиться с PRO-функциями</div>
            </div>

            <div className="hidden-three-circles-menu">


                <div className="hidden-three-circles-menu-item"><img src="img/SVG/cross-hidden-three-circles-menu.svg"></img>  Удалить</div>


            </div>

            {/* конец Тут будет верхняя панель */}
        </div>
    );
}

export default Profile;