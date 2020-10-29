const LEFT = 'LEFT', RIGHT = 'RIGHT'



function mainFunction(input, formatting, charLim) {
    let result = [], stars = ""

    // ADDING STARS
    for (let z = 1; z <= charLim + 2; z++) {
        stars += "*"
    }

    // HEADER
    result.push(stars)
    for (const n in input) {
        // BODY
        result.push(...splittingFunc(input[n], formatting[n], charLim))
    }
    // FOOTER
    result.push(stars)
    return result
}



function splittingFunc(words, format, charLim) {
    let sentence = words.join(" ").split(""), res= []

    // SINGLE LINE
    if (sentence.length < charLim) {
        // BUIDLING READY TO GO LINE
        res = [formattingFunc(sentence, format, charLim)]
    }   else {      // MUILTIPLE LINES
        let init = 0
            sentence = []

        for (let n in words) {
            sentence.push(words[n])
            let longinnes = sentence.reduce((acc, val) => acc + val.length, init) + (n > 0 ? sentence.length - 1 : 0) // WORDS + SPACES IN BETWEEN
            if (longinnes >= charLim) {
                sentence.pop() // DELETING THE LAST WORD
                sentence.push("&&", words[n]) // ADDING MARK TO DETERMINE LINE BREAK + DELETED WORD
                init = -longinnes // RESTARTING THE COUNT POINT
            }
        }

        sentence = sentence.join(" ").split(" && ") //BREAKING THE LINES WITH MARK
        for (const n in sentence) {
            // BUIDLING READY TO GO LINES
            res.push(formattingFunc(sentence[n].split(""), format, charLim))
        }
    }
    return res
}

function formattingFunc(chars, format, charLim) {
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
let charNum = 16

console.log(mainFunction(inpData, formData, charNum))