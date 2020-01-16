import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppTopBar from '../app-top-bar/app-top-bar';
import BottomNavigation from '../bottom-navigation/bottom-navigation';
import { workoutRoutes } from '../../configs'
import Profile  from '../profile/profile';
import History  from '../history/history';
import Workout  from '../workout/workout';
import Exercises  from '../exercises/exercises';
import Measure  from '../measure/measure';

import './../../styles/app.scss';

const App = () => {
    return (
        <div id="app-root-component">
            <Router>
                <Route path='/:location' component={AppTopBar} />
                <div id="primary-container">
                    {/* Тут будет основной контент */}
                    <Route path={workoutRoutes.profile.path} exact component={Profile} />
                    <Route path={workoutRoutes.history.path} component={History} />
                    <Route path={workoutRoutes.workout.path} component={Workout} />
                    <Route path={workoutRoutes.exercises.path} component={Exercises} />
                    <Route path={workoutRoutes.measure.path} component={Measure} />
                    {/* Тут будет основной контент */}
                </div>
                <Route path='/:path' component={BottomNavigation} />
            </Router>
        </div>
    );
}

export default App;