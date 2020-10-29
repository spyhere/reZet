let charLim = 16
const LEFT = 'LEFT', RIGHT = 'RIGHT'



function mainFunction(input, formatting) {
    let result = []

    result.push('******************')
    for (const n in input) {
        result.push(...splittingFunc(input[n], formatting[n]))
    }
    result.push('******************')
    return result
}



function splittingFunc(words, format) {
    let sentence = words.join(" ").split(""), res= []

    if (sentence.length < charLim) {

        res = [formattingFunc(sentence, format)]
    }   else {
        let init = 0
            sentence = []
            for (let n in words) {
                sentence.push(words[n])
                let longinnes = sentence.reduce((acc, val) => acc + val.length, init) + (n > 0 ? sentence.length - 1 : 0)
                if (longinnes >= charLim) {
                    sentence.pop()
                    sentence.push("&&", words[n])
                    init = -longinnes
                }
            }
            sentence = sentence.join(" ").split(" && ")
            for (const n in sentence) {
                res.push(formattingFunc(sentence[n].split(""), format))
            }
    }
    return res
}

function formattingFunc(chars, format) {
    let letters = [...chars]
    switch(format) {
        case LEFT: 
            for (let n = 0; n < charLim - chars.length; n++) {
                letters.push(" ")
            }
            break
        case RIGHT:
            for (let n = 0; n < charLim - chars.length; n++) {
                letters.unshift(" ")
            } 
            break
        default: 
            return
    }
return `*${letters.join("")}*`
}




let inpData = [
            ["Hello", "world"],
            ["Brad", "came", "to", "dinner", "with", "us"],
            ["He", "loves", "tacos"]
            ];
let formData = ["LEFT", "RIGHT", "LEFT"]

console.log(mainFunction(inpData, formData))