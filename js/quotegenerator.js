// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var citationpresent = true;
var yearknown = true;

function getRandomQuote(){ //Function to retrieve quote from the array
  var randomQuote = Math.floor(Math.random()*quotes.length); //Stores a random object value from the array "quotes", but not a specific property. E.g. if it grabs 7, it will grab the 7th object, but not any property of it.

  return randomQuote;
};

function printQuote(){
  getRandomQuote();

  var ran = getRandomQuote();
  var quotext = quotes[ran].quote; //new text node
  var sourcetext = quotes[ran].source;
  var citationtext = quotes[ran].citation;
  var year = quotes[ran].year;
  var quo = document.getElementById('quote-box');
  var ptags = document.getElementsByTagName('p');
  var spantags = document.getElementsByTagName('span');

  if(quotes[ran].citation == null){
    citationpresent = false;
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "<span>" + year + "</span>" + "</p>";
  }
  else{
    citationpresent = true;
  }
  if(quotes[ran].year == null){
      yearknown = false;
  }
  else{
    yearknown = true;
  }
  if(yearknown == false && citationpresent == false){
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "</p>";
  }
  else if (yearknown == true && citationpresent == true){
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "<span>" + citationtext + "</span>" + "<span>" + year + "</span>" + "</p>";
    spantags[0].classList.add("citation");
    spantags[1].classList.add("year");
  }
  if(yearknown == false && citationpresent == true){
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "<span>" + citationtext + "</span>" + "</p>";
    spantags[0].classList.add("citation");
  }
  if(yearknown == true && citationpresent == false){
    quo.innerHTML = "<p>" + quotext + "</p>" + "<p>" + sourcetext + "<span>" + year + "</span>" + "</p>";
    spantags[0].classList.add("year");
  }

  ptags[0].classList.add("quote");
  ptags[1].classList.add("source");
};
