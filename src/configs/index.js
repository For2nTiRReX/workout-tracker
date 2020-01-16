export const workoutRoutes = {
    profile: { id: '0', path: '/profile', displayInNav: true, label: 'Profile', labelRu: 'Профиль', icon: 'user.svg'},
    history: { id: '1', path: '/history', displayInNav: true, label: 'History', labelRu: 'История', icon: 'clock-o.svg' },
    workout: { id: '2', path: '/workout', displayInNav: true, label: 'Workout', labelRu: 'Воркаут', icon: 'plus.svg' },
    exercises: { id: '3', path: '/exercises', displayInNav: true, label: 'Exercises', labelRu: 'Упражнения', icon: 'gym.svg' },
    measure: { id: '4', path: '/measure', displayInNav: true, label: 'Measure', labelRu: 'Замер', icon: 'ruler.svg' }
};

export const workoutLocal = {
    current: 'RU'
}

export const workoutActionsList = [
    'USER_LOGGED_IN'
];
