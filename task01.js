function mainFunction(array) {
    // CHECKING VALIDITY OF INPUT
    if (array.length < 3 ||
        array.some(num => typeof num !== 'number')) return console.error('Not valid array')
    // 

    let result = []

    for (let n in array) {
        n = Number(n)
        if (array.length > n + 2) {
            result.push(condCheck(array[n], array[n+1], array[n+2]))
            n ++
        }
    }
    return result
}

function condCheck(a, b, c) {
    if (b < a && b < c) {
        return 1
    } else if (b > a && b > c) {
        return 1
    }
    return 0
}

console.log(mainFunction([9, 3, 5, 6, 4, 2, 10, 6]))