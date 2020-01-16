import React from 'react';
import { NavLink } from 'react-router-dom';
import { workoutRoutes, workoutLocal} from '../../configs'

const BottomNavigation = () => {
    return (
        <>
            {/* Тут будет нижнее меню  250x400 iphone7*/}
            <nav className="nav bottom-nav">
                <ul>
                    {Object.keys(workoutRoutes).map((key) => {
                        const route = workoutRoutes[key];
                        return route.displayInNav ? (
                            <li className={'profil icon-bottom'} key={key}>
                                <NavLink to={route.path} className="wrap-img-bottom">
                                    <img src={`img/SVG/${route.icon}`} alt={key}></img>
                                    <div>{workoutLocal.current === 'RU' ? route.labelRu : route.label}</div>
                                    {/* TODO: refactor locale logic */}
                                </NavLink>
                            </li>
                        ) : '';
                    })}
                </ul>
            </nav>

            {/* Тут будет нижнее меню */}
        </>
    );
}

export default BottomNavigation;