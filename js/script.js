// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var randomQuote;
//Creates an array of objects, "quotes"
var quotes = [
  {
    quote:"Frankly, my dear, I don't give a damn.",
    source: "Gone with the wind",
    citation: "- Rhett Butler (Gable), Gone with the wind.",
    year: 1939
  },
  {
    quote:"I'm gonna make him an offer he can't refuse.",
    source: "The Godfather",
    citation: "- Michael Corleone (Al Pacino), The Godfather.",
    year: 1972
  },
  {
    quote:"You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    source: "On the waterfront",
    citation: "- Terry Malloy, On the waterfront.",
    year: 1954
  },
  {
    quote:"Toto, I've a feeling we're not in Kansas anymore.",
    source: "The Wizard of Oz",
    citation: "- Judy Garland (Dorothy), Gone with the wind.",
    year: 1939
  },
  {
    quote:"Here's looking at you, kid.",
    source: "Casablanca",
    citation: "- Humphrey Bogart (Rick Blaine), Gone with the wind.",
    year: 1942
  },
  {
    quote:"Go ahead, make my day.",
    source: "Dirty Harry",
    citation: "- Clint Eastwood (Harry Callahan), Dirty Harry.",
    year: 1983
  },
  {
    quote:"May the Force be with you.",
    source: "Star Wars Saga",
    citation: "- Multiple Characters, Star Wars Saga.",
    year: 1977
  },
  {
    quote:"I love the smell of napalm in the morning!",
    source: "Apocalypse Now",
    citation: "- Robert Duvall (Lt. Bill Kilgore), Apocalypse Now.",
    year: 1979
  },
  {
    quote:"A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    source: "The Silence of the Lambs",
    citation: "- Anthony Hopkins (Hannibal Lecter), The Silence of the Lambs.",
    year: 1991
  },
  {
    quote:"You talking to me?",
    source: "Taxi Driver",
    citation: "- Robert De Niro (Travis Bickle), Taxi Driver.",
    year: 1976
  }
];



function getRandomQuote(){ //Function to retrieve quote from the array
  randomQuote = Math.floor(Math.random()*quotes.length); //Stores a random object value from the array "quotes", but not a specific property. E.g. if it grabs 7, it will grab the 7th object, but not any property of it.
};

function printQuote(){
  getRandomQuote();

  var r = randomQuote;
  var x;
  var q = document.getElementsByClassName('quote');
  var s = document.getElementsByClassName('source');

  for (x in quotes){
    q[0].innerHTML = quotes[r].quote;
    s[0].innerHTML = quotes[r].source;

  }
};
