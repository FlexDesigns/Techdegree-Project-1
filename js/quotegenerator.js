//event listener to respond to the window loading, including all scripts. When this is done, it will run the printQuote function every 20 seconds.
//also runs the script initially on load.
window.onload = printQuote(), setInterval(printQuote, 20000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var citationPresent = true; //boolean for checking if citation is listed
var yearKnown = true; //boolean for checking if year is listed

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
  let trivia = quotes[ran].trivia;

  let triv = document.getElementById('trivia');
  let quo = document.getElementById('quote-box'); //retrieves the div element called 'quote-box'
  let ptags = document.getElementsByTagName('p'); //retrieves all p tag elements and stores them in an array
  let spantags = document.getElementsByTagName('span'); //retrieves all span elements and stores them in an array

  if(quotes[ran].citation == null){ //checks if citation is present and sets the variable to false if its missing, else sets it to true.
    citationPresent = false;
  }
  else{
    citationPresent = true;
  }
  if(quotes[ran].year == null){ //checks if year is present and sets the variable to false if its missing, else sets it to true.
      yearKnown = false;
  }
  else{
    yearKnown = true;
  }
  if(yearKnown == false && citationPresent == false){ //Checks if yearKnown is false and citationPresent is false and prints the string without either if both are false.
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "</p>" + "<p>"+ trivia + "</p>";
  }
  else if (yearKnown == true && citationPresent == true){ //Checks if yearKnown is true and citationPresent is true and prints the string with both if they are.
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "<span>" + citationtext + "</span>" + "<span>" + year + "</span>" + "</p>" +"<p>"+ trivia + "</p>";
    spantags[0].classList.add("citation");
    spantags[1].classList.add("year");
  }
  if(yearKnown == false && citationPresent == true){//Checks if yearKnown is false and citationPresent is true and prints the string without yearKnown if it is false.
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "<span>" + citationtext + "</span>" + "</p>" + "<p>"+ trivia + "</p>";
    spantags[0].classList.add("citation");
  }
  if(yearKnown == true && citationPresent == false){//Checks if yearKnown is true and citationPresent is false and prints the string without citation if it is false.
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "<span>" + year + "</span>" + "</p>" + "<p>"+ trivia + "</p>";
    spantags[0].classList.add("year");
  }

  ptags[0].classList.add("quote"); //adds the quote class to the first set of p tags in the string
  ptags[1].classList.add("source");//adds the source class to the second set of p tags in the string
  ptags[2].setAttribute('id','trivia');//adds the trivia id to the third set of p tags in the string, I opted to use this over element.id just simply to ensure it works.

  //Generates random number between 0 and 256 for red, green and blue variables
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let bgColour = "rgb(" + red + "," + green + "," + blue + ")"; //constructs a string using the above variables which prints as rgb(red,green,blue) and stores it in a variable
  document.body.style.backgroundColor = bgColour; //sets the background color of the body using CSS styles to the string stored in bgColour
};
