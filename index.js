// Code your solution here



const findMatching = (array, str) => {
    return array.filter(function (name) {
        return name === str || name === str.toLowerCase()
    })
}

const fuzzyMatch = (array, str) => {
    return array.filter(function (letter) {
        return letter.slice(0,1) === str.slice(0,1)
    })
}

const matchName = (array, str) => {
    return array.filter(function (match) {
        return match.name === str
    })
}