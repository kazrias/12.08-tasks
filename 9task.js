//Task - Write a function which filters object by field.
function filterByField(users, str) {
    return users.filter(obj => obj[str])
}