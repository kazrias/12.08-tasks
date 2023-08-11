//Task - Write a function which returns array of lengths of user names
function getUsernameLengths(users) {
    return users.map(({ username }) => username.length)
}