/*
Task - Given a word, compute the scrabble score for the given word.To calculate scrabble score use the
following table of scores:
a, e, i, o, u, l, n, r, s, t  -  1
d, g  -  2
b, c, m, p  -  3
f, h, v, w, y  -  4
k  -  5
j, x  -  6
q, z  -  7
*/
function wordScore(word) {
    let letterValues = {
        a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1,
        d: 2, g: 2,
        b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4,
        k: 5,
        j: 6, x: 6,
        q: 7, z: 7
    }
    return word.split('').reduce((curr, next) => curr + letterValues[next], 0)
}