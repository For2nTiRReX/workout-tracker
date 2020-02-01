export const workoutRoutes = {
    profile: { id: '0', path: '/profile', displayInNav: true, label: 'Профиль', icon: 'user.svg'},
    history: { id: '1', path: '/history', displayInNav: true, label: 'История', icon: 'clock-o.svg' },
    workout: { id: '2', path: '/workout', displayInNav: true, label: 'Воркаут', icon: 'plus.svg' },
    exercises: { id: '3', path: '/exercises', displayInNav: true, label: 'Упражнения', icon: 'gym.svg' },
    measure: { id: '4', path: '/measure', displayInNav: true, label: 'Замер', icon: 'ruler.svg' }
};

export const workoutActionsList = [
    'USER_LOGGED_IN'
];
