// Обычная функция извлекающая нужный срез данных из состояния
export const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress
}