var allMovies = [];
var console = {};


//Movie object contructor
function Movie(title, rating, havewatched) {
    "use strict";
    this.title = title;
    this.rating = rating;
    this.havewatched = havewatched;
}

//add a movie OBJECT to the allMovies array
function addMovie(movie) {
    "use strict";
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies() {
    "use strict";
    var i;
    for (i = 0; i < allMovies.length; i) {
        console.log(allMovies[i]);
        i = i + 1;
    }
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings(rating) {
    "use strict";
    var i, count;
    count = 0;
    for (i = 0; i < allMovies.length; i) {
        if (allMovies[i].rating >= rating) {
            console.log(allMovies[i]);
            i = i + 1;
            count = count + 1;
        }
    }
}

//Toggle the 'haveWatched' property of the specified movie 
function changeWatched(title) {
    "use strict";
    var i;
    for (i = 0; i < allMovies.length; i) {
        if (allMovies[i].title === title) {
            if (allMovies[i].havewatched == true) {
                allMovies[i].havewatched = false;
            }
                else {
                    allMovies[i].havewatched = true;
                }
                
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
var x = new Movie("Spiderman", 3, "true");
var y = new Movie("Citizen Kane", 4, "false");
var z = new Movie("Zootopia", 4.5, "true");

allMovies.push(x, y, z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


var movie1 = new Movie("Parasite", 2, "false");


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);