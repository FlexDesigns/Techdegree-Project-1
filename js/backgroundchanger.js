function changeBackgroundColor(){
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

let bgColour = "rgb(" + red + "," + green + "," + blue + ")";

if(isRunning = 1){
    console.log(isRunning);
    document.body.style.backgroundColor = bgColour;
    console.log(bgColour);
    isRunning = isRunCheck;
  }
}

changeBackgroundColor();
