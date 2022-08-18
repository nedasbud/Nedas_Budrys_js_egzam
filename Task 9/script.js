/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget > 100000000) return true;
    return false;
  }
}

const movie1 = new Movie("abc", "james bond", 50000000);
console.log(movie1);
console.log("Was the movie expensive:", movie1.wasExpensive());

const movie2 = new Movie("abc 2", "james bond", 150000000);
console.log(movie2);
console.log("Was the movie expensive:", movie2.wasExpensive());
