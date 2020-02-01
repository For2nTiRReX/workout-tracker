import React from 'react';
import { useParams } from 'react-router-dom';
import { workoutRoutes } from '../../configs'

const AppTopBar = () => {
    let { location } = useParams();
    return (
        <div className="main-top">
            {/* начало Тут будет верхняя панель 250x400 iphone7 */}
            <h2 className="top-title">
                { workoutRoutes[location].label }
            </h2>
            <div>

            </div>
            {/* конец Тут будет верхняя панель */}
        </div>
    );
}

export default AppTopBar;