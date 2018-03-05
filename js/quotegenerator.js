//event listener to respond to the window loading, including all scripts. When this is done, it will run the printQuote function every 20 seconds.
//also runs the script initially on load.
window.onLoad = printQuote(), setInterval(printQuote, 20000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var citationPresent = true; //boolean for checking if citation is listed
var yearKnown = true; //boolean for checking if year is listed
var isRunCheck =0;
var isRunning = 0;

function getRandomQuote(){ //Function to retrieve quote from the array
  let randomQuote = Math.floor(Math.random()*quotes.length); //Stores a random object value from the array "quotes", but not a specific property. E.g. if it grabs 7, it will grab the 7th object, but not any property of it.

  return randomQuote; //returns the random value
};

function printQuote(){
  getRandomQuote();

  let ran = getRandomQuote(); //variable for storing the value of getRandomQuote

  //variables for storing the values of each property of the randomly generated quote
  let quotext = quotes[ran].quote;
  let sourcetext = quotes[ran].source;
  let citationtext = quotes[ran].citation;
  let year = quotes[ran].year;

  let quo = document.getElementById('quote-box'); //retrieves the div element called 'quote-box'
  let ptags = document.getElementsByTagName('p'); //retrieves all p tag elements and stores them in an array
  let spantags = document.getElementsByTagName('span'); //retrieves all span elements and stores them in an array

  if(quotes[ran].citation == null){ //checks if citation is present and sets the variable to false if its missing, else sets it to true.
    citationPresent = false;
  }
  else{
    citationPresent = true;
  }
  if(quotes[ran].year == null){ //checks if year is present and sets the vaariable to false if its missing, else sets it to true.
      yearKnown = false;
  }
  else{
    yearKnown = true;
  }
  if(yearKnown == false && citationPresent == false){
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "</p>";
  }
  else if (yearKnown == true && citationPresent == true){
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "<span>" + citationtext + "</span>" + "<span>" + year + "</span>" + "</p>";
    spantags[0].classList.add("citation");
    spantags[1].classList.add("year");
  }
  if(yearKnown == false && citationPresent == true){
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "<span>" + citationtext + "</span>" + "</p>";
    spantags[0].classList.add("citation");
  }
  if(yearKnown == true && citationPresent == false){
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "<span>" + year + "</span>" + "</p>";
    spantags[0].classList.add("year");
  }

  ptags[0].classList.add("quote");
  ptags[1].classList.add("source");

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let bgColour = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = bgColour;
};
