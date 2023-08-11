//Task - Write a function which calculates average age of users.
function getAverageAge(users) {
    return users.reduce((curr, { age }) => curr + age, 0) / users.length
}