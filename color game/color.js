var numSquares = 6;
var colors = [];
var pickColor;
var squares = document.querySelectorAll(".square");
var rgbD = document.getElementById("rgbDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    //mode buttons and events listeners
    setupModeButtons();
    setupSquares();
    resetF();
}

function setupModeButtons(){
    for(var i = 0; i <modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // }else{
            //     numSquares = 6;
            // }
    
            resetF();
            //figure out how many squares to show
            //pick new color
            //pick a new picked color
            //update page to reflect changes
        });
    }
}

function setupSquares(){
    for(var i= 0; i < squares.length; i++){

        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            
            //compare color to pickedColor
            if(clickedColor === pickColor){
                message.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                reset.textContent = "Play Again ?";
            }
            else{
                message.textContent = "Try Again!";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function resetF(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickColor = pick();
    //change colordisplay to matched picked color
    rgbD.textContent = pickColor;
    //change colors of squares
    for( var i= 0; i < squares.length; i++ ){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
        
    }
    reset.textContent = "New Colors";
    message.textContent = "";
    h1.style.backgroundColor = "steelblue";

}


rgbD.textContent = pickColor;

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickColor = pick();
//     rgbD.textContent = pickColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = "none";
//         }
//     }

//     message.textContent = "";
//     h1.style.backgroundColor = "steelblue";
// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickColor = pick();
//     rgbD.textContent = pickColor;
//     for(var i = 0; i<squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block"; 
//     }

//     message.textContent = "";
//     h1.style.backgroundColor = "steelblue";
// });

reset.addEventListener("click", function(){
    resetF();
});





function changeColors(colorP){
    //loop through all squares
    for( var j= 0; j < squares.length; j++ ){
        squares[j].style.backgroundColor = colorP;
    }
}

function pick(){
   var random =  Math.floor(Math.random()*colors.length)
   return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i< num; i++){
        //getRandom color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a red from 0 - 255
    //pick a green from 0 - 255
    //pick a blue from 0 - 255

    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}