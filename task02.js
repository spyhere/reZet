function mainFunction([arr1, arr2, arr3]) {
    // VALIDATING THE INPUT
    if (validityFalse(arr1, arr2, arr3)) return "Invalid input"
    // 

    let result = [], 
        arrTemp = []

    for (let n in arr1) {
        n = Number(n)
        if (arr1.length > n + 2) {
            for (let y = 0; y < 3; y++) {
                arrTemp.push(arr1[y+n], arr2[y+n], arr3[y+n])
            }
            result.push(condCheck(arrTemp))
            arrTemp = []
        }
        n ++
    }
    return result
}



function condCheck(array) {
    let check = array.sort((a, b) => a - b)
                    .reduce((acc, val) => {
        if (acc && acc != val) {
            acc = val; 
        } else {
            return false
        }
        return acc
        }) 

    if (check && array.reduce((acc, val) => acc + val) === 45) {
        return true
    }
    return false
}


function validityFalse(arr0, arr1, arr2) {
    let length = arr0.length
    for (n in arguments) {
        if (arguments[n].length !== length) return true
        if (arguments[n].length < 3 || arguments[n].some(num => typeof num !== 'number')) {
            return true
        }
        length = arguments[n].length
        n ++
    }
    return false
}



let input = [
            [ 1, 2, 3, 2, 7 ],
            [ 4, 5, 6, 8, 1 ],
            [ 7, 8, 9, 4, 5 ],
            ]

console.log(mainFunction(input))