let containerDiv = document.querySelector("#container");
let newDivs = document.createElement('div');
let clearButton = document.querySelector("#clear");
let redButton = document.querySelector("#red");
let blackButton = document.querySelector("#black");
let resizeButton = document.querySelector("#resize");


let number = prompt("Select a number between 1 and 100");

resizeButton.addEventListener("click", function(){
    let resize = prompt("Select a number between 1 and 100");
    gridArea(resize);    
    }
);


gridArea(number);

// grid container
function gridArea(number){
    containerDiv.style.width = "600px";
    containerDiv.style.height = "600px";
    containerDiv.style.display = "grid";
    containerDiv.style.margin = "auto";
    containerDiv.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    containerDiv.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    let area = number * number;
     //divs construction
    for(i=0;i<area;++i){
        let newDivs = document.createElement('div');
        newDivs.className = "newDivs";
        containerDiv.appendChild(newDivs);

    //red color by clicking red button
        redButton.addEventListener("click", function(){

            newDivs.addEventListener("mouseover", function(){
        
                newDivs.style.backgroundColor = "red";
            });
        })
    //black color by clicking black button
        blackButton.addEventListener("click", function(){

            newDivs.addEventListener("mouseover", function(){
        
                newDivs.style.backgroundColor = "black";
            });
        }) 
    // clear by clickin clear button
        clearButton.addEventListener("click", function(){
            newDivs.style.backgroundColor = "white";
        }) 

       
   }
}
