var sports = ['football', 'tennis', 'rugby']

var numberOfElements = sports.length
console.log(numberOfElements)

console.log('first sport:', sports[0])

sports.push('curling')

console.log(sports)

sports.pop()
console.log(sports)

console.log(sports[2]) // wonder why it couldnt bring back curling as 4? chat gbt

sports[0] = 'golf'
console.log(sports)

sports.unshift('football') //insert
console.log(sports)

// sports.shift() // removes start of array
// console.log(sports)

var firstElement = sports.shift()
console.log(sports)

sports.splice(1, 1)
console.log(sports)

for (var sport of sports){ //always have var in loop
    var uppercasedSport = sport.toUpperCase()
    console.log(uppercasedSport)
}

for (var i = 0; i < 1; i++) { // unusual kind of loop (might need to revise further)
    var currentSport = sports[i]
    var uppercasedSport = sport.toUpperCase()
    console.log(uppercasedSport)
}

for (var i = 0; i < sports.length; i++) {
    var currentSport = sports[i];
    var uppercasedSport = currentSport.toUpperCase();
    console.log(uppercasedSport);
}


var movie = {
    title: "It's a wonderful life", //can also use backslash to allow the apostrophe to work
    year: 1946,
    language: 'Spanish'
}

console.log("movie:", movie)
console.log("Movie title:", movie.title) //can also do square brackets and quotes (like in python) - good for instances of other symbols in the key. e.g year-of-release ["year-of-release"]

movie.cast = ['James Stewart', 'Donna Read']
console.log(movie)

movie.language = 'English'
console.log(movie)

delete movie.year
console.log(movie)

movie.ratings = {

    critic: 94,
    audience: 95
}

console.log(movie)
console.log("audience rating:", movie.ratings.audience)

console.log('first cast member:', movie.cast[0])

var keys = Object.keys(movie) //----------------------------- brings back the object(dictionaries') keys
console.log(keys)

for (var key in movie) { // 'in' with objects // brings back the keys
    console.log(movie[key]) // round brackets wouldnt work here
}

