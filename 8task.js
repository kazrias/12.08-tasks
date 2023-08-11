//Task - Write a function which remove users with language equals to 'ru'.
function filterUsers(users) {
    return users.filter(({ lang }) => lang !== 'ru')
}