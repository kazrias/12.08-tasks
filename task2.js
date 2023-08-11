//Task - Convert a long phrase to its acronym.
function acronymConvert(phrase) {
    return phrase.split(' ').map(item => item[0].toUpperCase()).join('');
}