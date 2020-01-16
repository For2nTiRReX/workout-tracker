import React from 'react';
import { useParams } from 'react-router-dom';
import { workoutRoutes, workoutLocal} from '../../configs'

const AppTopBar = () => {
    let { location } = useParams();
    return (
        <div>
            {/* начало Тут будет верхняя панель 250x400 iphone7 */}
            <h2 className="top-title">
                { workoutLocal.current === 'RU' ? workoutRoutes[location].labelRu : workoutRoutes[location].label }
            </h2>
            {/* конец Тут будет верхняя панель */}
        </div>
    );
}

export default AppTopBar;